import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Property } from "../../redux/property/models";
import { PropertyActions } from "../../redux/property/actions";
import Card from "../../components/card/card";
import "./rent.style.scss";

const { fetchProperties } = PropertyActions;

const Rent = () => {
  const dispatch = useDispatch();

  const properties = useSelector<any, Property[]>((state) => state.PropertyState.properties);
  const cityName = useSelector<any, string>((state) => state.PropertyState.cityName);

  useEffect(() => {
    if (properties.length === 0) {
      dispatch(fetchProperties());
    }
  }, []);

  const renderPropertiesByCityName = () => {
    if (cityName) {
      return properties.filter((p) => p.address.city === cityName).map((p) => <Card property={p} />);
    }
    return properties.map((p) => <Card property={p} />);
  };

  return (
    <div className="rent">
      <h1>Imóveis para alugar em {cityName ? cityName : "todo lugar! "}</h1>
      <div className="property-cards">{renderPropertiesByCityName()}</div>
    </div>
  );
};

export default Rent;
