export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getBackgroundColorByType = (type) => {
  switch (type) {
    case "grass":
      return "#4CAF50";
    case "fire":
      return "#FF5722";
    case "water":
      return "#2196F3";
    case "bug":
      return "#BAD363";
    case "electric":
      return "#E9E73A";
    case "poison":
      return "#9007A6";
    case "flying":
      return "#24EDEB";
    case "ground":
      return "#9B0A26";
    case "fairy":
      return "#EA4DD3";

    default:
      return "#5A5A5A";
  }
};

export const getPokemonBackgroundColorByType = (type) => {
  switch (type) {
    case "grass":
      return "#6CBD6F";
    case "fire":
      return "#F37B55";
    case "water":
      return "#66AFE9";
    case "bug":
      return "#D2E985";
    case "electric":
      return "#F1EF6F";
    case "poison":
      return "#C569D4";
    case "flying":
      return "#7AEBEA";
    case "ground":
      return "#BD3E56";
    case "fairy":
      return "#E577D5";

    default:
      return "#5A5A5A";
  }
};

export const getColorByStat = (value) => {
  if (value < 50) {
    return "#EA1414";
  } else if (value >= 50 && value < 75) {
    return "#EA9C14";
  } else if (value >= 75 && value < 100) {
    return "#1ED42C";
  } else {
    return "#1D5AE4";
  }
};


export const isPokemonInFavorites = (pokemon) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.some((favId) => favId === pokemon.pokemonDetail.id);
};

export const toggleFavorite = (pokemon) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isFavorite = favorites.some((favId) => favId === pokemon.pokemonDetail.id);

  if (!isFavorite) {
    favorites.push(pokemon.pokemonDetail.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    const updatedFavorites = favorites.filter((favId) => favId !== pokemon.pokemonDetail.id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }
};

export const handleSortPokemon = (sortOrder, pokemons, setPokemons) => {
  if (!pokemons || pokemons.length === 0) {
    return pokemons;
  }
  const pokeList = [...pokemons];
  pokeList.sort((a, b) => {
    const baseExpA = a.pokemonDetail.base_experience;
    const baseExpB = b.pokemonDetail.base_experience;

    if (sortOrder === "ascending") {
      return baseExpA - baseExpB;
    } else if (sortOrder === "descending") {
      return baseExpB - baseExpA;
    } else if (sortOrder === "default") {
      return a.pokemonDetail.id - b.pokemonDetail.id;
    } else {
      return 0;
    }
  });
  setPokemons(pokeList);
};

export const isMyPokemons = (pokemon) => {
  const myPokemons = JSON.parse(localStorage.getItem("myPokemons")) || [];
  return myPokemons.some((myPokeId) => myPokeId === pokemon.pokemonDetail.id);
};

export const toggleMyPokemons = (pokemon) => {
  const myPokemons = JSON.parse(localStorage.getItem("myPokemons")) || [];
  const isMyPokemons = myPokemons.some((myPokeId) => myPokeId === pokemon.pokemonDetail.id);
  if (!isMyPokemons) {
    myPokemons.push(pokemon.pokemonDetail.id);
    localStorage.setItem("myPokemons", JSON.stringify(myPokemons));
  } else {
    const updatedMyPokemons = myPokemons.filter((myPokeId) => myPokeId !== pokemon.pokemonDetail.id);
    localStorage.setItem("myPokemons", JSON.stringify(updatedMyPokemons));
  }
};
