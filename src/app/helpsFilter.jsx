"use client";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/firebase/firestore/getAllDocuments";
import { useEffect, useState } from "react";
import preDefinedCities from "../../helpsData/existingCities.json";
import { useDebounce } from "use-debounce";
import { extractDocCity } from "@/utils/firebase/firestore/extractDocCity";

export const HelpsFilter = ({ setFilters }) => {
  const [isLoadingCities, setIsLoadingCities] = useState(true);
  const [autoCompleteValue, setAutoCompleteValue] = useState("");
  const [debouncedAutoCompleteValue] = useDebounce(autoCompleteValue, 1000);
  const [serverOptions, setServerOptions] = useState([]);

  const handleLoadServerCities = async () => {
    setIsLoadingCities(true);

    const userInput = autoCompleteValue;
    const lowercasedInput = userInput.toLowerCase();
    const nextString = lowercasedInput + "\uf8ff";

    const data = await getDocs(
      query(
        collection(db, "helps"),
        where("city", ">=", lowercasedInput),
        where("city", "<", nextString),
      ),
    );
    setIsLoadingCities(false);
    const formattedData = extractDocCity(data.docs);
    if (formattedData.length) setServerOptions(formattedData);
  };

  const handleFilterOptions = (options, state) => {
    const filteredOptions = options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(state.inputValue.toLowerCase()) !==
        -1,
    );
    return filteredOptions;
  };

  // This assures that the server is only pinged when the city doesn't exist in the pre-defined cities
  useEffect(() => {
    const currentOptions = preDefinedCities.data.filter(
      (option) =>
        option.label.toLowerCase().indexOf(autoCompleteValue.toLowerCase()) !==
        -1,
    );
    if (
      autoCompleteValue &&
      autoCompleteValue === debouncedAutoCompleteValue &&
      !currentOptions.length
    ) {
      handleLoadServerCities();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedAutoCompleteValue, autoCompleteValue]);

  const handleSelectOption = (e, value) => {
    setAutoCompleteValue(value.label);
    setFilters((filters) => ({
      ...filters,
      city: value.label,
    }));
  };
  return (
    <Box>
      <Autocomplete
        disablePortal
        loading={isLoadingCities}
        dir="rtl"
        loadingText="جاري التحميل"
        id="combo-box-demo"
        sx={{
          width: {
            xs: 150,
          },
        }}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        value={autoCompleteValue}
        noOptionsText="لا يوجد نتائج"
        filterOptions={handleFilterOptions || serverOptions}
        options={preDefinedCities.data}
        disableClearable
        onChange={handleSelectOption}
        renderInput={(params) => (
          <TextField
            dir="rtl"
            style={{
              backgroundColor: "#fff",
            }}
            {...params}
            value={autoCompleteValue}
            onChange={(e) => setAutoCompleteValue(e.target.value)}
            label="موقع الضرر"
          />
        )}
      />
    </Box>
  );
};
