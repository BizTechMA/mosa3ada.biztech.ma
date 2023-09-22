"use client";
import {
  Box,
  Checkbox,
  Grid,
  Input,
  Radio,
  Stack,
  TextField,
  Typography,
  useFormControl,
} from "@mui/material";
import { RequestHeader } from "../RequestHeader";
import styles from "../styles/global.module.css";
import { ComponentFormState } from "..";
import { useFormContext } from "react-hook-form";
import { computedFieldProps } from "../../utils/computeFieldProps";
import { NEEDS_LIST } from "@/constants/helpRequestSteps";
import Image from "next/image";
export const RequestDetails = ({ step }) => {
  const { watch, setValue, formState } = useFormContext();

  const handleCheckboxChange = (event) => {
    setValue("in_place", event.target.value === "true");
  };
  const handleAttachNeed = (event) => {
    const { value } = event.target;
    const needs = watch("needs");
    if (needs.includes(value)) {
      setValue(
        "needs",
        needs.filter((need) => need !== value),
      );
    } else {
      setValue("needs", [...needs, value]);
    }
  };
  return (
    <Box>
      <div>
        <RequestHeader step={step} />
        <Grid container columns={12}>
          <Typography
            className={styles.fieldLabel}
            component={"label"}
            variant="body1"
          >
            المرجو إدخال المعلومات التالية{" "}
          </Typography>
          <Stack
            style={{
              width: "100%",
            }}
            spacing={4}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "30%",
                  },
                }}
              >
                <Stack spacing={4}>
                  <ComponentFormState
                    fieldName={"fullName"}
                    formState={formState}
                  >
                    <input
                      placeholder="الإسم الكامل"
                      className={styles.textField}
                      {...computedFieldProps({
                        fieldName: "fullName",
                        setValue,
                        watch,
                      })}
                    />
                  </ComponentFormState>
                  <ComponentFormState fieldName={"phone"} formState={formState}>
                    <input
                      placeholder="رقم الهاتف"
                      className={styles.textField}
                      {...computedFieldProps({
                        fieldName: "phone",
                        setValue,
                        watch,
                      })}
                    />
                  </ComponentFormState>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "30%",
                  },
                }}
              >
                <Typography
                  className={styles.fieldLabel}
                  component={"label"}
                  variant="body1"
                >
                  هل توجد بعين المكان ؟{" "}
                </Typography>
                <ComponentFormState
                  fieldName={"in_place"}
                  formState={formState}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <Radio
                        checked={watch("in_place")}
                        onChange={handleCheckboxChange}
                        value="true"
                      />
                      <label> نعم </label>
                    </div>
                    <div>
                      <Radio
                        checked={watch("in_place") === false}
                        onChange={handleCheckboxChange}
                        value="false"
                      />
                      <label> لا </label>
                    </div>
                  </div>
                </ComponentFormState>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "30%",
                  },
                }}
              >
                <Typography
                  className={styles.fieldLabel}
                  component={"label"}
                  variant="body1"
                >
                  هل توجد بعين المكان ؟{" "}
                </Typography>
                <ComponentFormState fieldName={"needs"} formState={formState}>
                  {NEEDS_LIST.map((need, ind) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      key={need.value}
                    >
                      <Checkbox
                        checked={watch("needs")?.includes(need.value)}
                        onChange={handleAttachNeed}
                        value={need.value}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <Image
                          src={need.iconSrc}
                          alt="needs"
                          width={23}
                          height={23}
                          priority
                        />
                        <label> {need.title}</label>
                      </div>
                    </div>
                  ))}
                </ComponentFormState>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={styles.fieldLabel}
                component={"label"}
                variant="body1"
              >
                معلومات أخرى{" "}
              </Typography>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "30%",
                  },
                }}
              >
                <ComponentFormState fieldName={"details"} formState={formState}>
                  <textarea
                    placeholder="معلومات أخرى"
                    className={styles.textArea}
                    {...computedFieldProps({
                      fieldName: "details",
                      setValue,
                      watch,
                    })}
                  />
                </ComponentFormState>
              </Box>
            </Grid>
          </Stack>
        </Grid>
      </div>
    </Box>
  );
};
