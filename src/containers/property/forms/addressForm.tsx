import React, { useState } from "react";
import Input from "../../../components/form/input";
import Textarea from "../../../components/form/textarea";
import Select from "./../../../components/form/select";

const estado = [
  { value: "MG", label: "Minas Gerais" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "SP", label: "Sao Paulo" },
];

const bairro = [
  { value: "Santa Ines", label: "Santa Ines" },
  { value: "Nova Granada", label: "Nova Granada" },
  { value: "Centro", label: "Centro" },
  { value: "other", label: "Outro" },
];
// select 4 estado
// bairro -> do back
// opcionais: complemento / referencia

const AddressForm = () => {
  const [showInputNeighborhood, setShowInputNeighborhood] = useState<boolean>(false);

  const onNeighborhoodChange = (val: string) => setShowInputNeighborhood(val === "other");

  return (
    <div className={"address-form"}>
      <Input label={"Cep"} placeholder={"XXXXX-XXX"} name="cep" />

      <Input label={"Rua/Avenida"} name="street" placeholder={"Rua Pitangui"} />
      <div className="number-complement">
        <Input label={"Numero"} type="number" name="number" />
        <Input label={"Complemento"} name="complement" />
      </div>

      <Select options={bairro} label={"Bairro"} name={"neighborhood_select"} onChange={onNeighborhoodChange} />
      {showInputNeighborhood && <Input label={""} name={"neighborhood_input"} placeholder="informe o nome do bairro" />}

      <Input label={"Cidade"} name="city" />
      <Select options={estado} label={"Estado"} name={"state"} />

      <Textarea label={"Referencia"} required={false} name="reference" />
    </div>
  );
};

export default AddressForm;
