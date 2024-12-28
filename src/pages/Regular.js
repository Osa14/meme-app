import Mem from "../components/Mem";

export function RegularPage(props) {
  
  const dane = props.data

  return (
    <div>
      <ul>
        {dane.map((mem) => (
          <li>
            <Mem data={mem}></Mem>
          </li>
        ))}
      </ul>
    </div>
  );
}