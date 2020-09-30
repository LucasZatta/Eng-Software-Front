import { Button, Form, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { Address, Property as PropertyModel } from "./../../redux/property/models";
import Input from "../../components/form/input";
import Switch from "../../components/form/switch";
import Textarea from "../../components/form/textarea";
import AddressForm from "./forms/addressForm";
import ApartmentForm from "./forms/apartmentForm";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../redux/user/models";
import { PropertyActions } from "./../../redux/property/actions";
import { useHistory } from "react-router-dom";
import "./property.style.scss";

const { registerProperty } = PropertyActions;

const Property = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [propertyType, setPropertyType] = useState<string>("apartment");
  const [savedPropertyID, setSavedPropertyID] = useState<string | null>(null);

  const onRadioChange = (val: "apartment" | "house") => setPropertyType(val);

  const loggedUser = useSelector<any, User>((state) => state.UserState.currentUser);
  const properties = useSelector<any, PropertyModel[]>((state) => state.PropertyState.properties);

  useEffect(() => {
    if (savedPropertyID && properties.length > 0) {
      const saved = properties.find((p) => p.id === savedPropertyID);
      if (saved) history.push("/home");
    }
  }, [properties]);

  useEffect(() => {
    if (!loggedUser) history.push("/home");
  }, []);

  const onFinish = (values: any) => {
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
    const idString = loggedUser.cpf + values.cep + values.number + values.complement;
    const newProperty: PropertyModel = {
      id: idString,
      ownerID: loggedUser.cpf,
      description: values.description,
      rent_value: parseInt(values.rent_value),
      rooms: parseInt(values.rooms),
      garage_spots: parseInt(values.garage_spots),
      living_rooms: parseInt(values.living_rooms),
      suites: parseInt(values.suites),
      area: parseInt(values.area),
      cabinet: values.cabinet,
      type: propertyType,
      floor: parseInt(values.floor),
      cond_value: parseInt(values.cond_value),
      concierge24: values.concierge24,
      address: propertyAddres,
    };
    setSavedPropertyID(idString);
    dispatch(registerProperty(newProperty));
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
