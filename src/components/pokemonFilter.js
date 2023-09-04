import { Box, Button, Popover } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { handleSortPokemon } from "./helpers/helpers";

function PokemonFilter({ isVisible, pokemons, setPokemons }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();
  const [sortOrder, setSortOrder] = useState("normal");

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

  return (
    isVisible && (
      <Box
        sx={{
          bgcolor: "#707573",
          minHeight: "40px",
          maxHeight: "40px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
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
            <Box>{t("baseExperience")} {t("descending")}</Box>
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
