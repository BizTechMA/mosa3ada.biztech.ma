"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
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
import {
  PlaceOutlined,
  StarOutlined,
  StartOutlined,
} from "@mui/icons-material";
export const RequestConfirmation = ({ step }) => {
  const { getValues } = useFormContext();

  const data = getValues();
  return (
    <Box>
      <div>
        <RequestHeader step={step} />
        <Grid container columns={12}>
          <Grid item xs={12}>
            <div>
              <Box
                sx={{
                  display: {
                    md: "flex",
                    xs: "block",
                  },
                }}
              >
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <StarOutlined color="primary" />
                    <span> عن طلب المساعدة</span>
                  </Typography>
                  <Grid
                    columns={{
                      md: 6,
                      xs: 12,
                    }}
                    container
                  >
                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        المدينة أو الجهة
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        <span>{data.city}</span>
                        {data.longitude && (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`}
                            target="_blank"
                          >
                            <Button
                              variant="outlined"
                              style={{
                                fontSize: 13,
                                display: "flex",
                                alignItems: "center",
                                marginRight: 7,
                                fontWeight: "bold",
                                color: "#0E6146",
                                marginTop: 10,
                                gap: 5,
                              }}
                            >
                              <PlaceOutlined />
                              <span>افتح خريطة الموقع</span>
                            </Button>
                          </a>
                        )}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        إسم الدوار/الجماعة/القيادة
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {data.state}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        نوع الطلب
                      </Typography>
                      <Typography
                        component={"div"}
                        style={{
                          display: "flex",
                          gap: 8,
                          marginTop: 10,
                        }}
                        className={styles.helpInfoText}
                      >
                        {data.needs.length
                          ? data.needs.map((need, needInd) => (
                              <div
                                key={needInd}
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  border: "solid 1px #ccc",
                                  padding: "5px 15px",
                                  borderRadius: 8,
                                  gap: 5,
                                }}
                              >
                                <span
                                  style={{
                                    marginRight: 3,
                                    marginLeft: 3,
                                  }}
                                ></span>
                                <Typography variant="body1" key={needInd}>
                                  {need}
                                </Typography>
                              </div>
                            ))
                          : "--"}
                      </Typography>
                    </Grid>

                    <Divider
                      sx={{
                        display: {
                          md: "none",
                          xs: "block",
                        },
                      }}
                      style={{
                        width: "100%",
                        margin: "20px 0",
                      }}
                    />
                  </Grid>
                </div>
                <Divider
                  vertical="true"
                  sx={{
                    display: {
                      md: "block",
                      xs: "none",
                    },
                    height: 300,
                    width: 2,
                    margin: "0 20px",
                    backgroundColor: "#000",
                    opacity: "5%",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <StarOutlined color="primary" />
                    <span>عن واضع/واضعة الطلب</span>
                  </Typography>
                  <Grid
                    columns={{
                      md: 6,
                      xs: 12,
                    }}
                    container
                  >
                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        الإسم الكامل
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {data.fullName}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        هل توجد بعين المكان؟{" "}
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {data.in_place ? "نعم" : "لا"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        رقم الهاتف{" "}
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {data.phone || "لا يوجد"}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
