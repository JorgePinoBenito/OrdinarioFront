import { FunctionComponent } from "preact";
import { ResultsCharacter } from "../types.ts";

const Character: FunctionComponent<ResultsCharacter> = (props) => {
  return (
    <div class="detail">
      {props.results.map((character) => {
        return (
          <>
            <li key={character.id}></li>
            <img src={character.image} alt={character.name} />
            <h1>{character.name}</h1>
            <p>Casa: {character.house}</p>

            {character.alive && <p>Vivo</p>}
            {!character.alive && <p>Muerto</p>}
          </>
        );
      })}
      <a href="/">Volver</a>;
    </div>
  );
};

export default Character;
