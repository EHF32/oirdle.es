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
      menuPosition={"fixed"}
      menuPlacement="top"
      className="my-react-select-container"
      classNamePrefix="my-react-select"
      inputValue={input}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        option: (styles) => ({ ...styles, textAlign: "left" }),
        valueContainer: (styles) => ({ ...styles, textAlign: "left" }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        border: "1px solid green",
        backgroundColor: "green",
      })}
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
