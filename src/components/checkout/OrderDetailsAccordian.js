import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { CartTable } from "../cart/CartTable";

export const OrderDetailsAccordian = ({ setactiveStep }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">1.Order Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CartTable />
        <Button
          variant="outlined"
          onClick={() => {
            setactiveStep(1);
          }}
        >
          Confirm
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};
