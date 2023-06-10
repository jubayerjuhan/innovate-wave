import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface TextInputField {
  style?: React.CSSProperties;
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  onChange?: any;
  onBlur?: any;
}
