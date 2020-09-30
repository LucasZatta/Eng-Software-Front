import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Property } from "../../redux/property/models";
import { PropertyActions } from "../../redux/property/actions";
import Card from "../../components/card/card";
import { useHistory } from "react-router-dom";
import { User } from "../../redux/user/models";

const { fetchProperties } = PropertyActions;

const MyProperties = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    const properties = useSelector<any, Property[]>((state) => state.PropertyState.properties);
    const loggedUser = useSelector<any, User>((state) => state.UserState.currentUser);
    
    useEffect(() => {
        if (!loggedUser) history.push("/home");
        if (properties.length === 0) {
            dispatch(fetchProperties());
        }
    }, []);

    const renderPropertiesByUser = () => {
        if (loggedUser) {
            const propertiesByUser = properties.filter((p) => p.ownerID === loggedUser.cpf)
            console.log(properties);
            console.log(propertiesByUser);
            return propertiesByUser.map((p) => <Card property={p} />);
        }
      };

    return (
        <div className="rent">
        <div className="property-cards">{renderPropertiesByUser()}</div>
        </div>
    )
};

export default MyProperties;
