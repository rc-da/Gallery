import { useEffect, useState } from "react";
import Button from "./Button";

export default function Header({ handleSelected, name, setName }) {
  useEffect(
    function () {
      handleSelected(name);
    },
    [name, handleSelected]
  );

  return (
    <div className="head">
      <div className="title">
        <p>Gallery</p>
      </div>
      <div className="searchbar">
        <input
          id="searchbar"
          type="text"
          placeholder="Search for Images"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="category">
        <Button id="category">Categories</Button>
      </div>
    </div>
  );
}
