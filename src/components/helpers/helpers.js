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

function generateUniqueKey(pokemon) {
  const pokemonDetail = pokemon.pokemonDetail;
  return `${pokemonDetail.id}_${capitalizeFirstLetter(pokemon.name)}`;
}

export const isPokemonInFavorites = (pokemon) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const uniqueKey = generateUniqueKey(pokemon);
  return favorites.some((fav) => fav.key === uniqueKey);
};

export const toggleFavorite = (pokemon) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const uniqueKey = generateUniqueKey(pokemon);

  const isFavorite = favorites.some((fav) => fav.key === uniqueKey);

  if (!isFavorite) {
    favorites.push({ key: uniqueKey, pokemon });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    const updatedFavorites = favorites.filter((fav) => fav.key !== uniqueKey);
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
  const uniqueKey = generateUniqueKey(pokemon);
  return myPokemons.some((myPoke) => myPoke.key === uniqueKey);
};

export const toggleMyPokemons = (pokemon) => {
  const myPokemons = JSON.parse(localStorage.getItem("myPokemons")) || [];
  const uniqueKey = generateUniqueKey(pokemon);
  const isMyPokemons = myPokemons.some((myPoke) => myPoke.key === uniqueKey);
  if (!isMyPokemons) {
    myPokemons.push({ key: uniqueKey, pokemon });
    localStorage.setItem("myPokemons", JSON.stringify(myPokemons));
  } else {
    const updatedMyPokemons = myPokemons.filter((myPoke) => myPoke.key !== uniqueKey);
    localStorage.setItem("myPokemons", JSON.stringify(updatedMyPokemons));
  }
};
