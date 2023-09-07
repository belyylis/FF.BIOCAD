import * as yup from "yup";

const driverSchema = yup.object().shape({
  driverId: yup.string().required("driverId required"),
  givenName: yup.string().required("givenName required"),
  familyName: yup.string().required("familyName required"),
  dateOfBirth: yup.string().required("dateOfBirth required"),
  url: yup.string().required("url required").url("Invalid url format"),
  nationality: yup.string().required("nationality required"),
});

export default driverSchema;
