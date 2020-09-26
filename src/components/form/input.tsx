import { Form, Input as AntInput } from "antd";
import React, { FC } from "react";

export interface InputProps {
  label: string;
  name?: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "tel";
  maxLength?: number;
  required?: boolean;
}

const Input: FC<InputProps> = ({ label, placeholder = "", type = "text", maxLength = 9999, name, required = true }) => {
  return (
    <Form.Item
      name={name ? name : label}
      label={label}
      rules={[
        {
          required: required,
          message: `${label} is required!`,
        },
      ]}
    >
      <AntInput type={type} placeholder={placeholder} maxLength={maxLength} size="large" />
    </Form.Item>
  );
};

export default Input;
