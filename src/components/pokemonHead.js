import { Box } from "@mui/material";
import ChangeLanguage from "./changeLanguage";

function PokemonHead() {
  return (
    <Box
      sx={{
    bgcolor: "#5A5A5A",
    minHeight: "70px",
    maxHeight: "70px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: "25px",
    paddingRight: "25px",
  }}
>
    
        <Box display={"flex"}>
        <ChangeLanguage />
        <Box fontSize={"20px"} fontWeight={"bold"} color={"white"}>Pokedex</Box>

        </Box>
        <Box>
        <img
          style={{ height: "20px" }}
          src="/static/img/pokemonLogo.svg"
          alt="pokemon-icon"
        />
        </Box>
    </Box>
  );
}

export default PokemonHead;
