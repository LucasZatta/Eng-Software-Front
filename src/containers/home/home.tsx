import { Button, Input } from "antd";
import React, { useState } from "react";
import "./home.style.scss";
import { PropertyActions } from "./../../redux/property/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const { setCityName } = PropertyActions;

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [inputValue, setInputValue] = useState<string>('');
  const onClickSearch = () => {
    dispatch(setCityName(inputValue));
    history.push("/rent");
  }
  return (
    <div className="home">
      <div className="bordao">
        <span className="bordao__principal">Reinvente seu jeito de morar</span>
        <span className="bordao__secundario">Alugue seu imóvel sem drama</span>
      </div>

      <div className="home__input">
        <span>Cidade: </span>
        <Input size="large"  onChange={ event => setInputValue(event.target.value) } placeholder="procure por uma cidade" />
      </div>

      <div className="home__search">
        <Button onClick={onClickSearch}>Encontrar imóveis</Button>
      </div>
    </div>
  );
}

export default Home;