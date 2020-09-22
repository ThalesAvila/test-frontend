import React from "react";
import "./Header.scss";
const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
