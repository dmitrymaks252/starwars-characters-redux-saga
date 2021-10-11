import { useSelector } from "react-redux";
import { selectPeople } from "../redux/reducers/people/selectors";

export default function App() {
  const people = useSelector(selectPeople);

  console.log(people);
  return (
    <>
      <h1>
        StarWars Characters
      </h1>
    </>
  );
}


