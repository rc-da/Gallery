import Items from "./Items";
import Gallery from "./Gallery";
import Header from "./Header";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState();

  function handleSelected(name) {
    setName(() => name);
  }
  return (
    <div className="app">
      <Header handleSelected={handleSelected} name={name} setName={setName} />
      <Items handleSelected={handleSelected} />
      <Gallery name={name} />
    </div>
  );
}
