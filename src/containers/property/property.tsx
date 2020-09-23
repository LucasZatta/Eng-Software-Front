import { Form } from "antd";
import React from "react";
import Input from "../../components/form/input";
import Select from "./../../components/form/select";

// select 4 estado
// bairro -> do back
// opcionais: complemento / referencia

const Property = () => {
  return (
    <div>
      <h1>Create Property</h1>
      <Form>
        <h2>Address</h2>
        <Input label={"Cep"} />
        <Select options={[]} name="aaaaa" label="aaa" />
        <Input label={"Cidade"} />
        <Input label={"Rua"} />
        <Input label={"Numero"} />
        <Input label={"Complemento"} />
        <Input label={"Referencia"} />
      </Form>
    </div>
  );
};

export default Property;
