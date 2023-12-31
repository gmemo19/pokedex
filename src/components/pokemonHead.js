import { Box } from "@mui/material";
import ChangeLanguage from "./changeLanguage";

function PokemonHead({ isPokeHeadVisible,handlePageChange }) {
  return (
    isPokeHeadVisible && (
      <Box
        sx={{
          bgcolor: "#5A5A5A",
          minHeight: "60px",
          maxHeight: "60px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <Box display={"flex"}>
          <ChangeLanguage />
          <Box fontSize={"20px"} fontWeight={"bold"} color={"white"} onClick={handlePageChange}>
            Pokedex
          </Box>
        </Box>
        <Box>
          <img
            style={{ height: "20px" }}
            src="/static/img/pokemonLogo.svg"
            alt="pokemon-icon"
          />
        </Box>
      </Box>
    )
  );
}

export default PokemonHead;
