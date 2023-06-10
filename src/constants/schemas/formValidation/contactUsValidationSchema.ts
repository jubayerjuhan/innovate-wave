import * as Yup from "yup";

const contactUsValidation = Yup.object().shape({
  message: Yup.string().required("Message is required"),
  businessName: Yup.string().required("Business Name is required"),
  serviceType: Yup.string().required("Service Type is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default contactUsValidation;
