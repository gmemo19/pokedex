import React, { useState } from "react";
import { Box, Button, Popover } from "@mui/material";
import { useTranslation } from "react-i18next";

function ChangeLanguage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t, i18n } = useTranslation();

  const languages = [
    { language: "tr", label: "turkish", flag: "Flag_of_Turkey.svg" },
    {
      language: "en",
      label: "english",
      flag: "Flag_of_the_United_Kingdom_(3-5).svg",
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLanguageClick = (item) => {
    const selectedLanguage = item.language;
    i18n.changeLanguage(selectedLanguage);
    handleClose();
  };

  return (
    <Box>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{
          height: "30px",
          backgroundColor: "white",
          marginRight: "15px",
        }}
      >
        <img
          style={{ height: "20px" }}
          src="/static/img/languageic.svg"
          alt="language-icon"
        />
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
        <Box padding={"12px 0"} borderRadius={"10px"}>
          {languages.map((language, index) => (
            <Box
              key={index}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "5px",
              }}
              onClick={() => handleLanguageClick(language)}
            >
              <img
                style={{ height: "20px", marginRight: "5px" }}
                src={"/static/img/" + language.flag}
                alt={language.label}
              />
              <Box>{t(language.label)}</Box>
            </Box>
          ))}
        </Box>
      </Popover>
    </Box>
  );
}

export default ChangeLanguage;
