import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function VersionInfoModal({ open, onClose }) {
  const { t } = useTranslation();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="device-modal-title"
      aria-describedby="device-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#f0f0f0",
          borderRadius: "4px",
          padding: "20px",
          textAlign: "center",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          height:"100px",
          width:"300px"
        }}
      >
        <Typography variant="h6" id="device-modal-title">
          {t("Version")} : 0.0.1
        </Typography>
        <br />
        <Typography variant="body1" id="device-modal-description">
          {t("producer")} : Mehmet Özçınar
        </Typography>
      </Box>
    </Modal>
  );
}

export default VersionInfoModal;
