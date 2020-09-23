import { Form, Input as AntInput } from "antd";
import React, { FC } from "react";

export interface InputProps {
  label: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ label, placeholder = "" }) => {
  return (
    <Form.Item
      name={label}
      label={label}
      rules={[
        {
          required: true,
          message: `${label} is required!`,
        },
      ]}
      hasFeedback
    >
      <AntInput placeholder={placeholder} />
    </Form.Item>
  );
};

export default Input;
