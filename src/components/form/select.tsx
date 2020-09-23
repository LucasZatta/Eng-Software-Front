import { Form, Select as AntSelect } from "antd";
import React, { FC } from "react";

export interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

const Select: FC<SelectProps> = ({ label, name, options }) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: true, message: `Please, select a ${label}` }]}
    >
      <AntSelect>
        {options.map((option) => (
          <AntSelect.Option value={option.value}>
            {option.label}
          </AntSelect.Option>
        ))}
      </AntSelect>
    </Form.Item>
  );
};

export default Select;
