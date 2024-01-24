import Button from "./Button";

export default function Items({ handleSelected }) {
  const items = [
    { name: "car", id: 1 },
    { name: "anime", id: 2 },
    { name: "flower", id: 3 },
    { name: "space", id: 4 },
    { name: "hill", id: 5 },
    { name: "bike", id: 6 },
    { name: "music", id: 7 },
    { name: "waterfall", id: 8 },
  ];

  return (
    <div className="items">
      {items.map((i) => (
        <Itembtn name={i.name} handleSelected={handleSelected} key={i.id} />
      ))}
    </div>
  );
}

function Itembtn({ name, handleSelected }) {
  return (
    <Button id="items" onClick={() => handleSelected(name)}>
      {`#${name}`}
    </Button>
  );
}
