import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Property } from "../../redux/property/models";
import { PropertyActions } from "../../redux/property/actions";
import Card from "../../components/card/card";


const { fetchProperties } = PropertyActions;

const Rent = () => {
    const properties = useSelector<any, Property[]>((state) => state.PropertyState.properties);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(properties.length === 0){
            dispatch(fetchProperties());
        }
    },[])
    return(
        <div>
           {properties.forEach(property => {
               <Card property = {property}/>
           })}
        </div>
    )
};

export default Rent;