import { Box, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';


function PokemonFooter({handlePageChange}) {
  return (
    <Box
      sx={{
    bgcolor: "#5A5A5A",
    minHeight: "50px",
    maxHeight: "50px",
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    borderRadius:"10px",
    justifyContent:"space-evenly",
    alignItems:"center"
  }}
>
<IconButton onClick={handlePageChange}>
    <HomeIcon/>
</IconButton>

    <FavoriteBorderIcon/>    
    <CatchingPokemonIcon/>
    <ImportantDevicesIcon/>
    </Box>
  );
}

export default PokemonFooter;