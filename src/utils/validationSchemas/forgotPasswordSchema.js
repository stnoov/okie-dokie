import * as Yup from "yup";

export const getForgotPasswordSchema = (intl) =>
  Yup.object().shape({
    email: Yup.string().email().required("Email address is required"),
  });
