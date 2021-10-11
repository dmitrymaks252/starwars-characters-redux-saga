import s from './CharacterCard.module.scss';
import { Link } from "react-router-dom";


const CharacterCard = ({people}) => {
  console.log(people);
  return (
    people.loading ?
      <p>Loading...</p> :
      (
        <div className={s.wrapper}>
          {
            people?.data?.results.map(character => {
              const id = character.url.replaceAll(/\D/g, '');

              return (
                <div className={s.card} key={id}>
                  <h3>Name: {character.name}</h3>
                  <p>Birth year: {character.birth_year}</p>
                  <p>Eye color: {character.eye_color}</p>
                  <p>Gender: {character.gender}</p>
                  <p>Hair color: {character.hair_color}</p>
                  <p>Height: {character.height}</p>
                  <p><Link to={`/people/${id}`}>Details</Link></p>
                </div>
              );
            })
          }
        </div>
      )

  );
};
export default CharacterCard;