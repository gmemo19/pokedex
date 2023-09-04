import React, { useEffect, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import PokemonMainPage from "./components/pokemonmainpage";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/i18n";

function App() {
  const [isLoading, setIsLoading] = useState();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getData();
  }, []);

 

  const fetchData = async (path) => {
    const options = { headers: { "platform-id": 1, locale: "en" } };
    const response = await fetch(path, options);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
    alert("Api hatasi");
    return;
  };

  const getData = async () => {
    setIsLoading(true);
    const data = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=40");
    await Promise.all(
      data.results.map(async (result) => {
        const pokeData = await fetchData(
          "https://pokeapi.co/api/v2/pokemon/" + result.name
        );
        result.pokemonDetail = pokeData;
      })
    );
    setPokemons(data.results);
    setIsLoading(false);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Box height={"100%"}>
        <PokemonMainPage pokemons={pokemons} setPokemons={setPokemons} isLoading={isLoading} />
      </Box>
    </I18nextProvider>
  );
}

export default App;
