import React from "react";
import styles from "./Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImgContainer}>
        <img src={pokemon.back_default} alt="" />
      </div>
      <p>Bulbasue</p>
      <p>Likes to eat</p>
    </div>
  );
}
