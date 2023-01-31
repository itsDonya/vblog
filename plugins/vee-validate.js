import { extend } from "vee-validate";
import {
  email,
  required,
  min,
  max,
  length,
  confirmed,
} from "vee-validate/dist/rules";

extend("required", required);
extend("max", max);
extend("email", email);
extend("min", min);
extend("length", length);
extend("confirmed", confirmed);

// required
extend("required", (value) => {
  if (value.length > 0) {
    return true;
  }
  return "{_field_} field is required";
});

// min
extend("min", {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ["length"],
  message: "{_field_} must have at least {length} characters",
});
