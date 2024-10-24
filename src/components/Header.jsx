import React from "react";
import logo from "../images/trollface.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header-image"></img>
      <h2 className="header-title">Meme Generator</h2>
    </header>
  );
}
