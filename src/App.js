import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [pokeapi, setpokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      .then((response) => {
        setpokemon(response.data.results);
      });
  }, []);

  console.log(pokeapi);

  return (
    <div className="App">
      <h1>Hello World it works update 3 successful</h1>
      {pokeapi.map((pokemon) => (
        <div>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
