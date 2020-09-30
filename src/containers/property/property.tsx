import { Button, Form, Radio } from "antd";
import React, { useState } from "react";
import { Address, Property as PropertyModel } from "./../../redux/property/models";
import Input from "../../components/form/input";
import Switch from "../../components/form/switch";
import Textarea from "../../components/form/textarea";
import AddressForm from "./forms/addressForm";
import ApartmentForm from "./forms/apartmentForm";
import "./property.style.scss";
import { useSelector } from "react-redux";
import { User } from "../../redux/user/models";

const Property = () => {
  const [propertyType, setPropertyType] = useState<string>("apartment");

  const onRadioChange = (val: "apartment" | "house") => setPropertyType(val);

  const loggedUser = useSelector<any, User>((state) => state.UserState.currentUser);

  const onFinish = (values: any) => {
    console.log("Success:", values);

    const propertyAddres: Address = {
      cep: values.cep,
      neighborhood: values.neighborhood_select === "other" ? values.neighborhood_input : values.neighborhood_select,
      state: values.state,
      city: values.city,
      street: values.street,
      number: values.number,
      complement: values.complement,
      reference: values.reference,
    };

    // const newProperty: Property = {
    //   ...propertyAddres,
    //   ownerID: loggedUser.cpf,

    //   description: values.description,
    //   rent_value: values.rent_value,
    //   rooms: values,
    //   garage_spots: values,
    //   living_rooms: values,
    //   suites: values,
    //   area: values,
    //   cabinet: values,

    //   floor?: number;
    //   cond_value?: number;
    //   concierge24?: boolean;
    // }
  };

  return (
    <div className="property">
      <h1>Create Property</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <div className="property__form">
          <div className="property__form--left">
            <h3>Endereco</h3>
            <AddressForm />
          </div>

          <div className="property__form--right">
            <h3>Informacoes do Imóvel</h3>
            <Radio.Group onChange={(val) => onRadioChange(val.target.value)} defaultValue={propertyType}>
              <Radio value={"apartment"}>Apartamento</Radio>
              <Radio value={"house"}>Casa</Radio>
            </Radio.Group>

            <div className={"info-form"}>
              <Input type="number" name="rent_value" label="Valor do aluguel" />

              <div className="room-suites">
                <Input type="number" name="rooms" label="Quartos" />
                <Input type="number" name="suites" label="Suites" />
              </div>

              <Input type="number" name="garage_spots" label="Vagas de garagem" />
              <Input type="number" name="living_rooms" label="Sala de Estar/Jantar" />
              <Input type="number" name="area" label="Area (em m2)" />

              {propertyType === "apartment" && <ApartmentForm />}

              <Textarea name={"description"} label={"Descricao do imóvel"} />

              <div className="switch">
                <Switch label="Armarios Embutidos" name="cabinet" />
                {propertyType === "apartment" && <Switch label="Portaria 24h" name="concierge24" />}
              </div>
            </div>
          </div>
        </div>

        <div className="register-button">
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Property;
