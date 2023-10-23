import React from "react";
import styles from "./PokeControll.module.css";

export default function PokeControll({ onPrevPokemon, onNextPokemon }) {
  return (
    <div>
      <button onClick={() => onPrevPokemon()}>Previous</button>
      <button onClick={() => onNextPokemon()}>Next</button>
    </div>
  );
}
