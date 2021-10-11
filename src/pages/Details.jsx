import { useSelector } from "react-redux";
import { selectPeopleDetails } from "../redux/reducers/peopleDetails/selectors";

export default function Details() {
  const {data, loading} = useSelector(selectPeopleDetails);
  return loading ?
    (
      <h2>Loading...</h2>
    ) :
    (
      <div>
        <h1>{data.name}</h1>
        <h2>Skin color: {data.skin_color}</h2>
        <h2>Mass: {data.mass}</h2>
        <h2>Home planet: </h2>
        <a
          style={{fontSize: "24px"}}
          target="_blank"
          href={data.homeworld}
        >
          {data.homeworld}
        </a>
        <ul style={{
          fontSize: "24px",
          listStyleType: "none",
          padding: 0
        }}
        >
          Films:
          {data.films.map((p, index) => <li key={index}><a target="_blank" href={p}>{p}</a></li>)}
        </ul>
      </div>
    );
}