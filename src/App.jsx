import Card from "./components/Card";
import SelectPokemon from "./components/SelectPokemon";
import PokeControll from "./components/PokeControll";
import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState(1);
  const [pokeChar, setPokeChar] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState(1);
  console.log(pokemonNumber);

  useEffect(() => {
    async function fetchPokemonList() {
      const api_Url = "https://pokeapi.co/api/v2/pokemon/";
      try {
        const response = await fetch(api_Url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching the pokemon list:", error);
      }
    }

    fetchPokemonList();
  }, []);

  useEffect(() => {
    async function fetchPokemon() {
      const api_Url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
      try {
        const response = await fetch(api_Url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching the pokemon:", error);
      }
    }
    fetchPokemon();
  }, [pokemonNumber]);

  useEffect(() => {
    async function fetchPokeChar() {
      const api_Url = `https://pokeapi.co/api/v2/characteristic/${pokemonNumber}`;
      try {
        const response = await fetch(api_Url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPokeChar(data);
      } catch (error) {
        console.error("Error fetching the pokemon characterisitics:", error);
      }
    }

    fetchPokeChar();
  }, [pokemonNumber]);

  function handleSelectPokemon(number) {
    setPokemonNumber(number);
  }

  function handleNextPokemon() {
    if (pokemonList.length > pokemonNumber) {
      setPokemonNumber((prevNum) => prevNum + 1);
    } else {
      setPokemonNumber(1);
    }
  }

  function handlePrevPokemon() {
    if (pokemonNumber > 1) {
      setPokemonNumber((prevNum) => prevNum - 1);
    } else if (pokemonNumber === 1) {
      setPokemonNumber(pokemonList.length);
    }
  }

  return (
    <div>
      <div className={styles.pokemonApp}>
        <SelectPokemon
          pokemonList={pokemonList}
          onSelectPokemon={handleSelectPokemon}
        />
        <Card pokemon={pokemon} />
        <PokeControll
          onPrevPokemon={handlePrevPokemon}
          onNextPokemon={handleNextPokemon}
        />
      </div>
    </div>
  );
}

export default App;
