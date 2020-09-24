import React, { FC } from "react";
import { Form, Switch as AntSwitch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

export interface SwitchProps {
  label: string;
  name: string;
}

const Switch: FC<SwitchProps> = ({ label, name }) => {
  return (
    <Form.Item label={label} name={name}>
      <AntSwitch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
    </Form.Item>
  );
};

export default Switch;
