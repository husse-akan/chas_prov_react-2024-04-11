function ChangeName({ onNameChange }) {
  return (
    <input
      type="text"
      placeholder="Skriv in ett nytt namn"
      onChange={(e) => onNameChange(e.target.value)}
    />
  );
}
export default ChangeName;
