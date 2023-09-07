import { Box, Button, MenuItem, Popover, Select } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import {
  capitalizeFirstLetter,
  filterPokemonType,
  handleSortPokemon,
} from "./helpers/helpers";

function PokemonFilter({ isVisible, pokemons, setPokemons, defaultPokemons }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();
  const [sortOrder, setSortOrder] = useState("normal");
  const [type, setType] = useState("all");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (sortType) => {
    setSortOrder(sortType);
    handleSortPokemon(sortType, pokemons, setPokemons);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event) => {
    setType(event.target.value);
    filterPokemonType(setPokemons, event.target.value, defaultPokemons);
  };

  const typeValues = [
    "all",
    "grass",
    "fire",
    "water",
    "bug",
    "electric",
    "poison",
    "flying",
    "ground",
    "fairy",
    "ghost",
    "rock",
    "fighting",
    "psychic",
    "normal",
  ];

  return (
    isVisible && (
      <Box
        sx={{
          bgcolor: "#707573",
          minHeight: "40px",
          maxHeight: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          sx={{
            height: "30px",
            marginLeft: "15px",
            backgroundColor: "#ffffff",
            width: "190px",
          }}
          MenuProps={{
            style: { height: "350px" },
          }}
        >
          {typeValues.map((valueType) => (
            <MenuItem value={valueType}>
              {capitalizeFirstLetter(valueType) + " " + "Pokemons"}
            </MenuItem>
          ))}
        </Select>
        <Button
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
          sx={{
            height: "25px",
            backgroundColor: "white",
            marginRight: "15px",
            width: "20px",
          }}
        >
          <FilterListIcon sx={{ color: "blue", height: "25px" }} />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              boxSizing: "border-box",
              "&:hover": { background: "grey" },
            }}
            display={"flex"}
            justifyContent={"space-between"}
            width="100%"
            alignItems={"center"}
            padding="15px 20px"
            onClick={() => {
              handleSort("default");
            }}
          >
            <Box>{t("default")}</Box>
            <ImportExportIcon
              style={{ height: "20px", marginRight: "5px", width: "25px" }}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: sortOrder === "ascending" ? "grey" : "white",
              cursor: "pointer",
              boxSizing: "border-box",
              "&:hover": { background: "grey" },
            }}
            display={"flex"}
            justifyContent={"space-between"}
            width="100%"
            alignItems={"center"}
            padding="15px 20px"
            onClick={() => {
              handleSort("ascending");
            }}
          >
            <Box>{t("baseExperience") + " " + t("ascending")}</Box>
            <ImportExportIcon
              style={{ height: "20px", marginRight: "5px", width: "25px" }}
            />
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              boxSizing: "border-box",
              "&:hover": { background: "grey" },
            }}
            display={"flex"}
            justifyContent={"space-between"}
            width="100%"
            alignItems={"center"}
            padding="15px 20px"
            onClick={() => {
              handleSort("descending");
            }}
          >
            <Box>
              {t("baseExperience")} {t("descending")}
            </Box>
            <ImportExportIcon
              style={{ height: "20px", marginRight: "5px", width: "25px" }}
            />
          </Box>
        </Popover>
      </Box>
    )
  );
}

export default PokemonFilter;
