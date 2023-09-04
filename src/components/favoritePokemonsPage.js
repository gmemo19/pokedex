import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import PokemonCardList from "./pokemonCardList";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function FavoritePokemonsPage({ isFavVisible, handlePokeInfoPage }) {
  const { t } = useTranslation();
  const favoritePokemons = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoritePokemonList = favoritePokemons.map((fav) => fav.pokemon);

  return (
    isFavVisible && (
      <Grid height={"100%"} width={"100%"}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Box
            fontSize={"20px"}
            fontWeight={"bold"}
            color={"#ffffff"}
            sx={{ paddingLeft: "15px", paddingTop: "15px" }}
          >
            {t("favoriteList")}
          </Box>
          {favoritePokemonList.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent:"center",
                alignItems:"center",
                height:"100%"
              }}
            >
              <SentimentVeryDissatisfiedIcon style={{fill:"#ffffff"}}/>
              <Box fontSize={"14px"} fontWeight={"bold"} color={"#ffffff"}>
                {t("favoritePokemonsNotFound!")}
              </Box>
            </Box>
          ) : (
            <PokemonCardList
              pokemonsList={favoritePokemonList}
              isVisible={isFavVisible}
              handlePokeInfoPage={handlePokeInfoPage}
            />
          )}
        </Box>
      </Grid>
    )
  );
}

export default FavoritePokemonsPage;
