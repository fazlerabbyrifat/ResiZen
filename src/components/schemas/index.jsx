import * as Yup from "yup";

const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(15)
    .required("Please enter your first name"),
  lastName: Yup.string()
    .min(3)
    .max(20)
    .required("Please enter your second name"),
  mobile: Yup.string()
    .matches(/^\d{10,11}$/, "Must be a valid phone number with 10 to 11 digits")
    .required("Please enter your mobile number"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .required("Enter your password")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include at least 1 capital letter, 1 small letter, 1 special character, and 1 number"
    ),
  confirm_password: Yup.string()
    .required("Please re-type your password")
    .oneOf([Yup.ref("password"), null], "password must be matched"),
});

export default signUpSchema;
