import React, { Component, useState } from "react";
import Select from "react-select";

const options = [
  { value: 1, label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Autocomplete = ({ options }: any) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <Select
      options={options}
      menuIsOpen={isMenuOpen}
      inputValue={input}
      placeholder={"¿Lo sabes? Busca por artista / titulo"}
      onInputChange={(v, action) => {
        if (action?.action !== "input-blur" && action?.action !== "menu-close")
          setInput(v);
        String(v).length > 0 ? setMenuOpen(true) : setMenuOpen(false);
      }}
      onBlur={() => setMenuOpen(false)}
      isClearable
    />
  );
};

export default Autocomplete;
