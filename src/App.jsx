import Card from "./components/Card";
import SelectPokemon from "./components/SelectPokemon";
import PokeControll from "./components/PokeControll";
import { useEffect, useState } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState(1);
  const [pokeChar, setPokeChar] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState(1);
  console.log(pokemon);

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

  return (
    <div>
      <div>
        <SelectPokemon pokemonList={pokemonList} />
        <Card pokemon={pokemon} />
        <PokeControll />
      </div>
    </div>
  );
}

export default App;
