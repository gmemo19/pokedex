import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  LinearProgress,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  capitalizeFirstLetter,
  getBackgroundColorByType,
  getColorByStat,
  isMyPokemons,
  isPokemonInFavorites,
  toggleFavorite,
  toggleMyPokemons,
} from "./helpers/helpers";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

function PokemonInfo({
  isPokeInfo,
  pokemon,
  handlePageChange,
  handleFavPokePage,
  handleMyPokePage,
}) {
  const { t } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertMyPoke, setShowAlertMyPoke] = useState(false);
  const pokemonDetail = pokemon && pokemon.pokemonDetail;


  function AlertModal({ open, onClose, onGoToFavorite }) {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        sx={{ "& .MuiDialog-paper": { width: "300px", height: "200px" } }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isPokemonInFavorites(pokemon)
            ? t("pokemonHasBeenAddedToYourFavourites!")
            : t("pokemonHasBeenRemovedFromYourFavourites!")}
        </DialogTitle>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            bottom: "8px",
            left: "8px",
            right: "8px",
          }}
        >
          <Button onClick={onClose} color="primary">
            {t("close")}
          </Button>
          <Button onClick={onGoToFavorite} color="primary">
            {t("favoriteList")}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }


  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(pokemon);
    setShowAlert(true);
  };


  function AlertMyPokeModal({ open, onClose, onGoToMyPoke }) {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        sx={{ "& .MuiDialog-paper": { width: "300px", height: "150px" } }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          {isMyPokemons(pokemon)
            ? t("pokemonCaught!")
            : t("youLeftPokemon!")}
        </DialogTitle>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            bottom: "8px",
            left: "8px",
            right: "8px",
          }}
        >
          <Button onClick={onClose} color="primary">
            {t("close")}
          </Button>
          <Button onClick={onGoToMyPoke} color="primary">
            {t("myPokemons")}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  const handleOpenMyPokeAlert = () => {
    setShowAlertMyPoke(true);
  };

  const handleCloseMyPokeAlert = () => {
    setShowAlertMyPoke(false);
  };

  const handleToggleMyPokemons = () => {
    toggleMyPokemons(pokemon);
    setShowAlertMyPoke(true);
  };

  useEffect(() => {
    if (!isPokeInfo) {
      setShowAlert(false);
      setShowAlertMyPoke(false);
    }
  }, [isPokeInfo]);

  return (
    isPokeInfo && (
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            backgroundColor: getBackgroundColorByType(
              pokemonDetail?.types?.[0]?.type?.name || "normal"
            ),
            minHeight: "70px",
            maxHeight: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ArrowBackIosIcon
              onClick={handlePageChange}
              sx={{ fill: "#ffffff", height: "24px" }}
            />
            <Box fontSize={"18px"} fontWeight={"bold"} color={"#ffffff"}>
              Pokedex
            </Box>
          </Box>
          <Box>
            <img
              style={{ height: "24px" }}
              src="/static/img/pokemonLogo.svg"
              alt="pokemon-icon"
            />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: getBackgroundColorByType(
              pokemonDetail?.types?.[0]?.type?.name || "normal"
            ),
            minHeight: "30px",
            maxHeight: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
        >
          <Box color={"white"} fontWeight={"bold"} fontSize={"22px"}>
            {capitalizeFirstLetter(pokemon.name)}
          </Box>
          <Box color={"white"} fontSize={"22px"} fontWeight={"bold"}>
            #{pokemonDetail.id}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: getBackgroundColorByType(
              pokemonDetail?.types?.[0]?.type?.name || "normal"
            ),
          }}
        >
          <img
            src={pokemonDetail.sprites?.other["official-artwork"].front_default}
            alt="1"
            style={{ height: "200px", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            minHeight: "50px",
            maxHeight: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {isMyPokemons(pokemon) ? (
              <CatchingPokemonIcon onClick={() => handleToggleMyPokemons(pokemon)}
                style={{
                  fill: isMyPokemons(pokemon) ? "#F31D26" : "inherit",
                  cursor: "pointer",
                }} />

            ) : (<CatchingPokemonIcon onClick={() => handleToggleMyPokemons(pokemon)} />
            )}
            <Box color={"white"} marginLeft={"8px"}>
              {isMyPokemons(pokemon)
                ? t("dropThePokemon")
                : t("catchThePokemon")}
            </Box>
          </Box>
          <AlertMyPokeModal
            open={showAlertMyPoke}
            onClose={handleCloseMyPokeAlert}
            onGoToMyPoke={handleMyPokePage}
            toggleMyPokemons={handleToggleMyPokemons}
          />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {isPokemonInFavorites(pokemon) ? (
              <FavoriteIcon
                onClick={() => handleToggleFavorite(pokemon)}
                style={{
                  fill: isPokemonInFavorites(pokemon) ? "#F31D26" : "inherit",
                  cursor: "pointer",
                }}
              />
            ) : (
              <FavoriteBorderIcon onClick={() => handleToggleFavorite(pokemon)} />
            )}
            <Box color={"white"} marginLeft={"8px"}>
              {isPokemonInFavorites(pokemon)
                ? t("removeFavorite")
                : t("addFavorite")}
            </Box>
          </Box>

          <AlertModal
            open={showAlert}
            onClose={handleCloseAlert}
            onGoToFavorite={handleFavPokePage}
            toggleFavorite={handleToggleFavorite}
          />
        </Box>
        <Box
          sx={{
            minHeight: "60px",
            maxHeight: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            boxSizing: "border-box",
            paddingLeft: "25px",
          }}
        >
          <Box color={"white"} fontSize={"18px"} fontWeight={"bold"}>
            {t("baseExperience")}:
          </Box>
          <Box color={"white"} fontSize={"18px"}>
            {pokemonDetail.base_experience}
          </Box>
        </Box>
        <Box
          sx={{
            minHeight: "80px",
            maxHeight: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            boxSizing: "border-box",
            paddingLeft: "25px",
          }}
        >
          <Box color={"white"} fontSize={"18px"} fontWeight={"bold"}>
            {t("pokemonTypes")}
          </Box>
          <Box sx={{ display: "flex" }}>
            {pokemonDetail?.types?.map((detail, i) => (
              <Box
                key={detail.type.name}
                sx={{
                  height: "20px",
                  backgroundColor: getBackgroundColorByType(
                    pokemonDetail?.types?.[0]?.type?.name || "normal"
                  ),
                  padding: "4px 8px",
                  margin: "4px 4px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box color={"white"} fontSize={"14px"}>
                  #{detail.type.name}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            boxSizing: "border-box",
            paddingLeft: "25px",
          }}
        >
          <Box color={"white"} fontSize={"18px"} fontWeight={"bold"}>
            {t("baseStats")}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {pokemonDetail?.stats?.map((detail, i) => (
              <Box
                key={detail.stat.name}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  justifyContent: "center",
                }}
              >
                <Box color={"white"} fontSize={"14px"} width="150px">
                  {t(detail.stat.name)}:
                </Box>
                <Box
                  sx={{ width: "100%", display: "flex", alignItems: "center" }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={detail.base_stat}
                    sx={{
                      width: "150px",
                      borderRadius: "5px",
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: getColorByStat(detail.base_stat),
                      },
                    }}
                  />
                  <Box
                    sx={{
                      color: "white",
                      padding: "0 9px",
                    }}
                  >
                    {detail.base_stat}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            minHeight: "80px",
            maxHeight: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            boxSizing: "border-box",
            paddingLeft: "25px",
          }}
        >
          <Box color={"white"} fontSize={"18px"} fontWeight={"bold"}>
            {t("abilities")}
          </Box>
          <Box sx={{ display: "flex" }}>
            {pokemonDetail?.abilities?.map((detail, i) => (
              <Box
                key={i}
                sx={{
                  height: "20px",
                  backgroundColor: getBackgroundColorByType(
                    pokemonDetail?.types?.[0]?.type?.name || "normal"
                  ),
                  padding: "4px 8px",
                  margin: "4px 4px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box color={"white"} fontSize={"14px"}>
                  #{detail.ability.name}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    )
  );
}

export default PokemonInfo;
