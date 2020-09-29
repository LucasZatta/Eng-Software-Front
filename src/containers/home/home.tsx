import { Button, Input } from "antd";
import React from "react";
import "./home.style.scss";

function Home() {
  return (
    <div className="home">
      <div className="bordao">
        <span className="bordao__principal">Reinvente seu jeito de morar</span>
        <span className="bordao__secundario">Alugue seu imóvel sem drama</span>
      </div>

      <div className="home__input">
        <span>Cidade: </span>
        <Input size="large" placeholder="procure por uma cidade" />
      </div>

      <div className="home__search">
        <Button>Encontrar imóveis</Button>
      </div>
    </div>
  );
}

export default Home;
