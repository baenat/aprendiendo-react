import { useState } from "react";
import dark from "../assets/moon.png";
import light from "../assets/sun.png";

export function ButtonTheme({handleChangeTheme, theme}) {

  const iconTheme = theme ? dark : light;

  return (
    <button onClick={handleChangeTheme} className="theme">
      <img src={iconTheme} alt={`Theme ${theme}`} />
    </button>
  );
}
