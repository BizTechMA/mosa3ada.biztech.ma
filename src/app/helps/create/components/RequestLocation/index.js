"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { RequestHeader } from "../RequestHeader";
import styles from "../styles/global.module.css";
import { ComponentFormState, RequestMap } from "..";
import { useFormContext } from "react-hook-form";
import { computedFieldProps } from "../../utils/computeFieldProps";
import { PlaceOutlined } from "@mui/icons-material";
import { useRef } from "react";
import { toast } from "react-hot-toast";
export const RequestLocation = ({ step }) => {
  const { watch, setValue, formState } = useFormContext();

  const mapRef = useRef(null);
  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setValue("longitude", position.coords.longitude);
        setValue("latitude", position.coords.latitude);
        setValue("zoom", 16);
        mapRef.current.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
        });
      });
    } else {
      toast.error("المرجو تفعيل خدمة تحديد المواقع");
    }
  };

  console.log(mapRef);
  return (
    <Box>
      <div>
        <RequestHeader step={step} />
        <Grid container columns={12}>
          <Grid item xs={12}>
            <Typography
              className={styles.fieldLabel}
              component={"label"}
              variant="body1"
              style={{
                marginBottom: 10,
              }}
            >
              المرجو تحديد موقع الضرر
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RequestMap ref={mapRef} step={step} />
              <Button
                onClick={getCurrentPosition}
                style={{
                  marginTop: 12,
                }}
              >
                حدد موقعي
                <PlaceOutlined />
              </Button>
            </div>
          </Grid>
          <Grid style={{ padding: 20 }} item xs={12}>
            <Typography
              className={styles.fieldLabel}
              component={"label"}
              variant="body1"
            >
              أدخل من فضلك عنوان مكان الضرر
            </Typography>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "30%",
                },
              }}
            >
              <Stack spacing={4}>
                <ComponentFormState fieldName={"city"} formState={formState}>
                  <input
                    placeholder="الجهة أو المدينة"
                    className={styles.textField}
                    {...computedFieldProps({
                      fieldName: "city",
                      setValue,
                      watch,
                    })}
                  />
                </ComponentFormState>
                <ComponentFormState fieldName={"state"} formState={formState}>
                  <input
                    placeholder="الجماعة / القيادة/ اسم الدوار"
                    className={styles.textField}
                    {...computedFieldProps({
                      fieldName: "state",
                      setValue,
                      watch,
                    })}
                  />
                </ComponentFormState>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
