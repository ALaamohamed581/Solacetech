import { Control, Controller } from "react-hook-form";

import { TextField, InputLabelProps } from "@mui/material";
import { FormValues } from "../../types/forminputs";
import React from "react";

interface FormInoutTypes {
  name: keyof FormValues | string;
  label: string;
  control: Control<FormValues>;
  error: boolean | undefined;
  helperText: string;
  type?: string;
  select?: boolean;
  children?: React.ReactNode;
  props?: React.ReactNode;
  rules: Record<string, unknown>;
  InputLabelProps?: Partial<InputLabelProps>;
}
const FormInputs = ({
  name,
  label,

  rules,
  control,
  error,
  helperText,
  type,
  select,
  children,
  ...props
}: FormInoutTypes) => {
  return (
    <Controller
      rules={rules}
      name={name as unknown as keyof FormValues}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          label={label}
          variant="outlined"
          error={error}
          helperText={helperText}
          type={type}
          select={select}
        >
          {children}
        </TextField>
      )}
    />
  );
};

export default FormInputs;
