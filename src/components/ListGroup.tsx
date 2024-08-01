function ListGroup() {
  let cities = ["Delhi", "Mumbai", "Bengaluru", "Dhanbad", "Hyderabad"];

  return (
    <>
      <h1>List</h1>
      {/* {cities.length === 0 ? <p>No item found!</p> : null} */}
      {cities.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {cities.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
