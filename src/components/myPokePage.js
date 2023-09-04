import { Box} from "@mui/material";
import { useTranslation } from "react-i18next";



function MyPokemonsPage({isMyPoke}) {
  const { t } = useTranslation();
  return (
    isMyPoke && (

      <Box sx={{display:"flex",width:"100%",paddingLeft: "30px",height:"100%"}}>
      <Box
        fontSize={"20px"}
        fontWeight={"bold"}  
        color={"#ffffff"}  
        paddingTop={"25px"} 
      >
        {t("myPokemons")}
      </Box>
    </Box>
    )
  );
}

export default MyPokemonsPage;