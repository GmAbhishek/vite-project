function HelloWorld() {
  const ListItems = ["hello", "world", " hi", "nigga"];
  return (
    <>
    <h1>List Group</h1>
      <ul className="list-group">
        {ListItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default HelloWorld;
