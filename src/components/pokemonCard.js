import { Box, Grid } from "@mui/material";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function PokemonCard({ pokemon, index, pokemonDetail, isVisible }) {
  const getTypeColor = (type) => {
    switch (type) {
      case "grass":
        return "#4CAF50";
      case "fire":
        return "#FF5722";
      case "water":
        return "#2196F3";
      case "bug":
        return "#BAD363";

      default:
        return "#5A5A5A";
    }
  };

  return (
    isVisible && (
      <Grid item xs={6} md={2} key={index}>
        <Box
          height={"120px"}
          sx={{
            backgroundColor: getTypeColor(
              pokemonDetail?.types?.[0]?.type?.name || "normal"
            ),
            borderRadius: "10px",
            boxSizing: "border-box",
            padding: "15px",
          }}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box color={"white"} fontWeight={"bold"}>
              {capitalizeFirstLetter(pokemon.name)}
            </Box>
            <Box color={"white"} fontSize={"18px"}>
              #{pokemonDetail.id}
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {pokemonDetail?.types?.map((detail, i) => (
                <Box color={"white"} fontSize={"14px"}>
                  #{detail.type.name}
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                height: "60px",
                backgroundColor: "#9FA1A0",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={
                  pokemon.pokemonDetail.sprites?.other["official-artwork"]
                    .front_default
                }
                alt="1"
                style={{ height: "50px", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    )
  );
}

export default PokemonCard;
