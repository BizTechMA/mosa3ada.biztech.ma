import {
  RequestConfirmation,
  RequestDetails,
  RequestLocation,
} from "@/app/helps/create/components";
import { CheckOutlined, DescriptionOutlined } from "@mui/icons-material";

export const NEEDS_LIST = [
  {
    title: "طعام وماء",
    value: "إغاثة",
    iconSrc: "/food.svg",
  },
  {
    title: "إغاثة",
    value: "طعام وماء",
    iconSrc: "/ighata.svg",
  },
  {
    title: "مساعدة طبية",
    value: "مساعدة طبية",
    iconSrc: "/help.svg",
  },
  {
    title: "مأوى",
    value: "مأوى",
    iconSrc: "/home.svg",
  },
  {
    title: "مخاطر",
    value: "مخاطر",
    iconSrc: "/danger.svg",
  },
];
export const HELP_REQUEST_DEFAULT_VALUES = {
  fullName: "",
  phone: "",
  exact_position: {
    longitude: "",
    latitude: "",
  },
  state: "",
  city: "",
  in_place: null,
  needs: [],
  details: "",
  zoom: 11.5,
};
export const HELP_REQUEST_STEPS = [
  {
    title: "وضع طلب",
    titleIcon: DescriptionOutlined,
    component: RequestLocation,
    formFields: ["city", "state"],
  },
  {
    title: "وضع طلب",
    titleIcon: DescriptionOutlined,
    component: RequestDetails,
    formFields: ["needs", "details", "in_place", "phone", "fullName"],
  },
  {
    title: "التأكد من صحة المعلومات",
    titleIcon: CheckOutlined,
    component: RequestConfirmation,
    formFields: [],
  },
];
