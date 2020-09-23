import React from "react";
import "./Header.scss";
import Logo from "../../assets/img/matchbox-logo.png";
const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className="Header">
    <img src={Logo} alt="Matchbox Logo" />
    <h1>{title}</h1>
  </header>
);

export default Header;
