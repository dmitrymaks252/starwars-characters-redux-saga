import CharacterCard from "../components/CharacterCard/CharacterCard";
import Header from "../components/Header/Header";
import CharactersPagination from "../components/CharactersPagination/CharactersPagination";
import { useDispatch, useSelector } from "react-redux";
import { selectPeople } from "../redux/reducers/people/selectors";
import { LOAD_USERS } from "../redux/reducers/people/actions";

export default function App() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);

  const changePage = (newPage) => dispatch({
    type: LOAD_USERS,
    payload: {
      page: newPage,
      search: people.search
    }
  });

  const search = e => dispatch({
    type: LOAD_USERS,
    payload: {
      page: 1,
      search: e.target.value
    }
  });

  return (
    <>
      <Header search={people.search} onChange={search}/>
      <CharacterCard people={people}/>
      <CharactersPagination
        page={people.page}
        total={people?.data?.count}
        onChange={changePage}
      />
    </>
  );
}


