export default function Button({ children, id = "btn", onClick }) {
  return (
    <button id={id} onClick={onClick}>
      {children}
    </button>
  );
}
