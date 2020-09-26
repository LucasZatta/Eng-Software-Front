import React from "react";
import Input from "../../../components/form/input";
import Select from "./../../../components/form/select";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import { Form } from "antd";
import Switch from "../../../components/form/switch";

const ApartmentForm = () => {
  return (
    <div className={"property-form__type--apartment"}>
      <Input type="number" label={"Andar"} name="floor" />
      <Input type="number" label={"Valor do Condominio"} name="cond_value" />
      <Switch label="Portaria 24h" name="concierge24" />
    </div>
  );
};

export default ApartmentForm;
