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
  { value: "SantaInes", label: "Santa Ines" },
  { value: "NovaGranada", label: "Nova Granada" },
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
    <div className={"property-form__address"}>
      <Input label={"Rua/Avenida"} placeholder={"Rua Pitangui"} />
      <Input label={"Numero"} type="number" />
      <Input label={"Complemento"} />
      <Select options={bairro} label={"Bairro"} name={"neighborhood-select"} onChange={onNeighborhoodChange} />
      {showInputNeighborhood && <Input label={""} name={"neighborhood-input"} />}
      <Input label={"Cep"} placeholder={"XXXXX-XXX"} />
      <Input label={"Cidade"} />
      <Select options={estado} label={"Estado"} name={"state"} />
      <Textarea label={"Referencia"} required={false} />
    </div>
  );
};

export default AddressForm;
