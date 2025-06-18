import { FunctionComponent } from "preact";
import { ResultsTodos } from "../types.ts";

const Characters: FunctionComponent<ResultsTodos> = (props) => {
  const characters = props.results;
  return (
    <div class="grid">
      {characters.map((character) => {
        return (
          <div class="card">
            <li key={character.id}></li>
            <a class="name" href={`characters/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <div class="card-info">
                <p>{character.name}</p>

                <span class="star fav">★</span>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
