import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { CartTable } from "../cart/CartTable";

export const OrderDetailsAccordian = ({ setactiveStep }) => {
  const [open, setOpen] = useState(true);
  return (
    <Accordion expanded={open}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Typography variant="h5">1.Order Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CartTable />
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            setactiveStep(1);
            setOpen(false);
          }}
          sx={{ mt: 2 }}
        >
          Confirm
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};
