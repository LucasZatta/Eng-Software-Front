import { Button, Form, Radio } from "antd";
import React, { useState } from "react";
import Input from "../../components/form/input";
import Switch from "../../components/form/switch";
import Textarea from "../../components/form/textarea";
import AddressForm from "./forms/addressForm";
import ApartmentForm from "./forms/apartmentForm";
import "./property.style.scss";

const estado = [
  { value: "MG", label: "Minas Gerais" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "SP", label: "Sao Paulo" },
];

const bairro = [
  { value: "SantaInes", label: "Santa Ines" },
  { value: "NovaGranada", label: "Nova Granada" },
  { value: "Centro", label: "Centro" },
  { value: "other", label: "Outro" },
];

const Property = () => {
  const [propertyType, setPropertyType] = useState<string>("apartment");
  const onRadioChange = (val: "apartment" | "house") => setPropertyType(val);

  const onFinish = (values: any) => console.log("Success:", values);

  return (
    <div>
      <h1>Create Property</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <h3>Endereco</h3>
        <AddressForm />

        <h3>Informacoes do Imóvel</h3>

        <Radio.Group onChange={(val) => onRadioChange(val.target.value)} defaultValue={propertyType}>
          <Radio value={"apartment"}>Apartamento</Radio>
          <Radio value={"house"}>Casa</Radio>
        </Radio.Group>

        <div className={"property-form__type"}>
          <Textarea name={"description"} label={"Descricao do imóvel"} />
          <Input type="number" name="rent_value" label="Valor do aluguel" />
          <Input type="number" name="garage_spots" label="Vagas de garagem" />
          <Input type="number" name="living_rooms" label="Sala de Estar/Jantar" />
          <Input type="number" name="area" label="Area (em m2)" />
          <Switch label="Armarios Embutidos" name="cabinet" />
          {propertyType === "apartment" && <ApartmentForm />}
        </div>

        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Property;
