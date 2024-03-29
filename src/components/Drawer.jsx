import React from "react";
import logo from "../assets/svg/logo.svg";

export default function Drawer() {
  return (
    <div className="Drawer">
      <div className="Drawer__logo">
        <img src={logo} alt="Logo" />
        <h1>Gigante Motos</h1>
      </div>
      <nav className="Drawer__nav">
        <ul>
          <li>
            <a href="a">Início</a>
          </li>
          <li>
            <a href="a">Estoque</a>
          </li>
          <li>
            <a href="a">Busca</a>
          </li>
          <li>
            <a href="a">Pedidos</a>
          </li>
          <li>
            <a href="a">Histórico</a>
          </li>
          <li>
            <a href="a">Relatórios</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
