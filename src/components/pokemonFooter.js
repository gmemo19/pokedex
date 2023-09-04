import { Box, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { useState } from "react";
import VersionInfoModal from "./versionInfoModal";


function PokemonFooter({handlePageChange,isPokeFooter,handleFavPokePage,handleMyPokePage}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    isPokeFooter && (
<Box className="PokemonFooter">

    <Box
      sx={{
    bgcolor: "#5A5A5A",
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    justifyContent:"space-evenly",
    alignItems:"center",
    position:"sticky"
   
  }}
>
<IconButton onClick={handlePageChange}>
    <HomeIcon/>
</IconButton>

    <FavoriteBorderIcon onClick={handleFavPokePage}/>    
    <CatchingPokemonIcon onClick={handleMyPokePage}/>
    <ImportantDevicesIcon onClick={handleOpenModal}/>
    </Box>
    <VersionInfoModal open={isModalOpen} onClose={handleCloseModal}/>
</Box>
    )
  );
}

export default PokemonFooter;