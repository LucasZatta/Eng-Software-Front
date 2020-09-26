import { Button } from "antd";
import React from "react";
import Input from "../../components/form/input";
import "./home.style.scss";

function Home() {
  return (
    <div className="home">
      <div className="bordao">
        <span className="bordao__principal">Reinvente seu jeito de morar</span>
        <span className="bordao__secundario">Alugue seu imóvel sem drama</span>
      </div>

      <Input label="Cidade" name="city" placeholder="Busque por cidade" />

      <Button>Encontrar imóveis</Button>
    </div>
  );
}

export default Home;
