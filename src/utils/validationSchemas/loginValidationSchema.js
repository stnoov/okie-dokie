import * as Yup from "yup";

export const getLoginFormSchema = (intl) =>
  Yup.object().shape({
    email: Yup.string().email().required("Email address is required"),
    password: Yup.string().required("No password provided."),
  });
