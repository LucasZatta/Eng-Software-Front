import { Card as AntCard } from "antd";
import React, { FC } from "react";
import { Property } from "../../redux/property/models";
export interface CardProps {
  property: Property;
}

const Card: FC<CardProps> = ({ property }) => {
  console.log(property);
  return (
    <div className="site-card-border-less-wrapper">
      <AntCard title={"title"} bordered={false} style={{ width: 300 }}>
        <p>{property.address.city + "," + property.address.neighborhood}</p>
        <p>{"R$ "+property.rent_value}</p>
        <p>{property.type}</p>
      </AntCard>
    </div>
  );
};
export default Card;
