import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function PokemonSearch({isVisible,pokemons,searchValue,setFoundedPokeList,setSearchValue}) {

    const [searchIsFocused, setSearchIsFocused] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const found = [];
        pokemons?.name?.forEach((pokemons) => {
          
            if (
              pokemons?.name
                ?.toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            ) {
              found.push(pokemons);
            } 
          
        });
        setFoundedPokeList(found);
      }, [searchValue]);

      const renderSearchArea = () => {
        const handleSearchFocused = () => {
          setSearchIsFocused(true);
        };
        const handleSearchBlur = () => {
          setSearchIsFocused(false);
        };
        
        return (
          isVisible && (
              <Box width={"97%"} position="sticky" top={5} zIndex="999" >
                <Paper elevation={0} className={"input-base-area"}>
                  <InputBase
                    sx={{ ml: 1, flex: 1, width: "80%", marginLeft: "15px" }}
                    placeholder={t("searchPoke")}
                    inputProps={{ "aria-label": "Pokemon Ara" ?? "" }}
                    value={searchValue}
                    onFocus={handleSearchFocused}
                    onBlur={handleSearchBlur}
                    onChange={(event) => {
                      setSearchValue(event.target.value);
                    }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    onClick={() => {
                      if (searchValue !== "") {
                        setSearchValue("");
                      }
                    }}
                  >
                    {searchValue === "" ? <SearchIcon /> : <CloseIcon />}
                  </IconButton>
                </Paper>
              </Box>
            )
        );
    };


}

export default PokemonSearch;
