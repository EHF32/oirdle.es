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
      menuPosition={"fixed"}
      menuPlacement="top"
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "hotpink",
          primary: "black",
        },
      })}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
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
