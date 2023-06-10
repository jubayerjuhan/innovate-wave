import React from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface TextInputField {
  id?: string;
  style?: React.CSSProperties;
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  onChange: any;
  onBlur: any;
}
