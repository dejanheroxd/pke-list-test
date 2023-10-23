import React from "react";
import styles from "./SelectPokemon.module.css"; // Assuming it's "SelectPokemon.module.css"

export default function SelectPokemon({ pokemonList }) {
  return (
    <div>
      <select className={styles.select}>
        {pokemonList.map((pokemon, index) => (
          <option key={pokemon.name} value={index}>
            {pokemon.name}
          </option>
        ))}
      </select>
    </div>
  );
}
