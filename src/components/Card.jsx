import React from "react";
import styles from "./Card.module.css";

export default function Card({ pokemon }) {
  function firstLetterCaps(word) {
    if (word === undefined) {
      return;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImgContainer}>
        <img src={pokemon?.sprites?.front_default} alt="" />
      </div>
      <p className={styles.pokemonName}>{firstLetterCaps(pokemon?.name)}</p>
      <p>Likes to eat</p>
    </div>
  );
}
