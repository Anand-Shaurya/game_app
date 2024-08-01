function ListGroup() {
  const cities = ["Delhi", "Mumbai", "Bengaluru", "Dhanbad", "Hyderabad"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
