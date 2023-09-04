import { Box, Grid } from "@mui/material";
import {
  capitalizeFirstLetter,
  getBackgroundColorByType,
  getPokemonBackgroundColorByType,
} from "./helpers/helpers";
import { useTranslation } from "react-i18next";

function PokemonCard({ pokemon, index, isVisible, handlePokeInfoPage }) {
  const pokemonDetail = pokemon && pokemon.pokemonDetail;
  const { t } = useTranslation();

  if (!pokemonDetail) {
    return null;
  }
  return (
    isVisible && (
      <Grid item xs={6} md={2} key={index}>
        <Box
          height={"150px"}
          sx={{
            backgroundColor: getBackgroundColorByType(
              pokemonDetail?.types?.[0]?.type?.name || "normal"
            ),
            borderRadius: "10px",
            boxSizing: "border-box",
            padding: "15px",
            position: "relative",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => handlePokeInfoPage(pokemon)}
        >
          <Box height="100%">
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box color={"white"} fontWeight={"bold"}>
                {capitalizeFirstLetter(pokemon.name)}
              </Box>
              <Box color={"white"} fontSize={"18px"} fontWeight={"bold"}>
                #{pokemonDetail.id}
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {pokemonDetail?.types?.map((detail, i) => (
                  <Box
                  key={i}
                    sx={{
                      height: "15px",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      padding: "4px 8px",
                      margin: "4px 0",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      color={"white"}
                      fontSize={"12px"}
                      display={"flex"}
                      fontWeight={"bold"}
                    >
                      #{detail.type.name}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  height: "60px",
                  width: "60px",
                  backgroundColor: getPokemonBackgroundColorByType(
                    pokemonDetail?.types?.[0]?.type?.name || "normal"
                  ),
                  borderRadius: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    pokemon.pokemonDetail.sprites?.other["official-artwork"]
                      .front_default
                  }
                  alt="1"
                  style={{ height: "50px", objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              height={"50px"}
            >
              <Box color={"white"} fontSize={"14px"} fontWeight={"bold"}>
                {t("baseExperience")}                      :
              </Box>
              <Box color={"white"} fontSize={"15px"} fontWeight={"bold"}>
                {pokemonDetail.base_experience}
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    )
  );
}

export default PokemonCard;
