import { Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



function PokemonInfo({isPokeInfo}) {
  return (
    isPokeInfo && (
    <Box>
    <Box sx={{
    bgcolor: "#5A5A5A",
    minHeight: "70px",
    maxHeight: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: "25px",
    paddingRight: "25px",
  }}>
     <Box>
        <ArrowBackIosIcon/>
        <Box>Pokedex</Box>
     </Box>
     <Box>
     <img
          style={{ height: "20px" }}
          src="/static/img/pokemonLogo.svg"
          alt="pokemon-icon"
        />
     </Box>
    </Box>

    </Box>

    )
  );
}

export default PokemonInfo;