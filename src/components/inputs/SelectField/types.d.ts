import React from "react";

export type SelectFieldProps = {
  id?: string;
  options: string[];
  style?: React.CSSProperties;
  name: string;
  placeholder: string;
  label?: string;
  onChange: any;
  onBlur: any;
  errorMessage?: string;
};
