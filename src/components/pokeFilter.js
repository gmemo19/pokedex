import { Box, Button, Popover } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function PokemonFilter(isVisible) {
  const [anchorEl, setAnchorEl] = useState(null);
  // const { t, i18n } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
      ></Popover>
    </Box>
    )
  );
}

export default PokemonFilter;
