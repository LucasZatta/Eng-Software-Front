import { Form, Select as AntSelect } from "antd";
import React, { FC } from "react";

export interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  onChange?: Function;
}

const Select: FC<SelectProps> = ({ label, name, options, onChange = () => {} }) => {
  return (
    <Form.Item name={name} label={label} rules={[{ required: true, message: `Please, select a ${label}` }]}>
      <AntSelect onChange={(val) => onChange(val)}>
        {options.map((option) => (
          <AntSelect.Option value={option.value}>{option.label}</AntSelect.Option>
        ))}
      </AntSelect>
    </Form.Item>
  );
};

export default Select;
