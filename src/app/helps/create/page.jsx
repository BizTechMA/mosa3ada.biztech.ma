"use client";
import {
  HELP_REQUEST_DEFAULT_VALUES,
  HELP_REQUEST_STEPS,
} from "@/constants/helpRequestSteps";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  ButtonBase,
  Card,
  Container,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ArrowBack,
  ArrowForward,
  ArrowLeft,
  CloseOutlined,
  Telegram,
} from "@mui/icons-material";
import { db } from "@/utils/firebase/firestore/getAllDocuments";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { RequestSuccess } from "./components";

const RequestHelpPage = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const currentStep = useMemo(
    () => HELP_REQUEST_STEPS[currentStepIndex],
    [currentStepIndex],
  );

  const form = useForm({
    defaultValues: HELP_REQUEST_DEFAULT_VALUES,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleNext = async () => {
    const isFormValid = await form.trigger(currentStep.formFields);
    if (!isFormValid) return;
    // This is somewhat stupid cause the check is already done through JSX, too sleppy to fix it c:
    if (currentStepIndex === HELP_REQUEST_STEPS.length - 1) {
      handleCreateRequest();
      return;
    }
    setCurrentStepIndex((prev) => prev + 1);
  };

  const handleCreateRequest = async () => {
    const data = form.getValues();
    setLoading(true);
    try {
      await addDoc(collection(db, "helps"), {
        contact: {
          phone: data.phone,
        },
        details: data.details,
        in_place: data.in_place,
        ...(data.exact_position.longitude
          ? {
              exact_position: {
                longitude: data.longitude,
                latitude: data.latitude,
              },
            }
          : {}),
        person_name: data.fullName,
        city: data.city,
        position_static: data.state,
        needs: data.needs,
        dis_confirmation_count: 0,
        confirmation_count: 0,
        source: null,
        date: new Date().toLocaleString(),
      });
      setLoading(false);
      setSuccess(true);
    } catch (e) {
      console.error(e);
      setLoading(false);
      toast.error("حدث خطأ ما");
    }
  };
  const handleBack = () => {
    setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {success && <RequestSuccess />}
      {!success && (
        <>
          <div
            style={{
              backgroundColor: "white",
              padding: "15px 20px",
            }}
          >
            <Container maxWidth="xl">
              <Box
                style={{
                  display: "flex",
                }}
              >
                <ButtonBase
                  disabled={currentStepIndex === 0}
                  role="button"
                  style={{
                    display: "flex",
                    opacity: currentStepIndex === 0 ? 0.5 : 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                  onClick={handleBack}
                >
                  <ArrowForward />
                  <span
                    style={{
                      fontSize: 18,
                    }}
                  >
                    رجوع
                  </span>
                </ButtonBase>
                <Link
                  role="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 10,
                    marginRight: "auto",
                  }}
                  href={"/"}
                >
                  إلغاء
                  <CloseOutlined />
                </Link>
              </Box>
            </Container>
          </div>
          <Divider
            style={{
              backgroundColor: "#C3C3C3",
              opacity: 0.1,
            }}
          />
          <Container
            maxWidth="xl"
            sx={{
              padding: {
                md: "0 30px",
                xs: 0,
              },
            }}
          >
            <Card
              sx={{
                minWidth: 350,
                minHeight: 230,
                display: "flex",
                flexDirection: "column",
                padding: "30px 18px",
                margin: {
                  md: "30px 0",
                },
              }}
            >
              <FormProvider {...form}>
                <currentStep.component step={currentStep} />
              </FormProvider>
              <div
                style={{
                  marginRight: 5,
                  marginTop: 25,
                  display: "flex",
                  gap: 10,
                }}
              >
                {currentStepIndex !== HELP_REQUEST_STEPS.length - 1 && (
                  <Button
                    style={{
                      display: "flex",
                      gap: 5,
                    }}
                    size="large"
                    fullWidth
                    onClick={handleNext}
                    variant={"outlined"}
                  >
                    <span>تابع</span>
                    <ArrowBack />
                  </Button>
                )}
                {currentStepIndex === HELP_REQUEST_STEPS.length - 1 && (
                  <Button
                    style={{
                      display: "flex",
                      gap: 5,
                    }}
                    fullWidth
                    disabled={loading}
                    size="large"
                    onClick={handleNext}
                    variant={"contained"}
                  >
                    <span>أرسل الطلب</span>
                    <Telegram />
                  </Button>
                )}
              </div>
            </Card>
          </Container>{" "}
        </>
      )}
    </div>
  );
};

const schema = yup.object().shape({
  fullName: yup.string().required("المرجو إدخال الإسم الكامل"),
  phone: yup.string().required("المرجو إدخال رقم الهاتف"),
  details: yup.string(),
  longitude: yup.string().required(),
  latitude: yup.string().required(),
  state: yup.string().required("المرجو إدخال الولاية"),
  city: yup.string().required("المرجو إدخال المدينة"),
  in_place: yup.boolean().required("هل توجد بعين المكان ؟ "),
  needs: yup
    .array()
    .required("المرجو إختيار حاجياتك")
    .min(1, " المرجو إختيار علا الأقل حاجية واحدة"),
});
export default RequestHelpPage;
