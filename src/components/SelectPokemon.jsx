import React from "react";
import styles from "./SelectPokemon.module.css"; // Assuming it's "SelectPokemon.module.css"

export default function SelectPokemon({ pokemonList, onSelectPokemon }) {
  function firstLetterCaps(word) {
    if (word === undefined) {
      return;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  return (
    <div>
      <select
        onChange={(e) => onSelectPokemon(e.target.value)}
        className={styles.select}
      >
        {pokemonList.map((pokemon, index) => (
          <option key={pokemon.name} value={index + 1}>
            {firstLetterCaps(pokemon.name)}
          </option>
        ))}
      </select>
    </div>
  );
}
