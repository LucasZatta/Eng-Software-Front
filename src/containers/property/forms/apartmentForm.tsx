import React from "react";
import Input from "../../../components/form/input";

const ApartmentForm = () => {
  return (
    <div className="floor-cond">
      <Input type="number" label={"Andar"} name="floor" />
      <Input type="number" label={"Valor do Condominio"} name="cond_value" />
    </div>
  );
};

export default ApartmentForm;
