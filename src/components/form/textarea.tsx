import { Form, Input as AntInput } from "antd";
import React, { FC } from "react";

export interface TextareaProps {
  label: string;
  name?: string;
  required?: boolean;
}

const Textarea: FC<TextareaProps> = ({ label, name, required = true }) => {
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
      <AntInput.TextArea autoSize={{ minRows: 3, maxRows: 3 }} allowClear />
    </Form.Item>
  );
};

export default Textarea;
