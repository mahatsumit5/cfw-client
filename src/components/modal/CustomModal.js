import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/modalSlice";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Paper, Typography } from "@mui/material";
const style = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 350, md: 350 },
  bgcolor: "background.paper",
  borderRadius: "10px",
  padding: "20px",
};
export const CustomModal = ({ title, children }) => {
  const { isModalOpen, modalName } = useSelector((store) => store.modalInfo);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setModal(false));
  };

  return (
    <Modal
      open={isModalOpen}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Paper
          elevation={0}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="text" color="primary">
            {title}
          </Button>
          <Button variant="text" color="error" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Paper>
        {children}
      </Box>
    </Modal>
  );
};
