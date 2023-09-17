import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const PaymentAccordian = ({ activeStep, setactiveStep }) => {
  return (
    <Accordion disabled={activeStep < 2}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">3.Payment details</Typography>
      </AccordionSummary>
      <AccordionDetails>Your content herer</AccordionDetails>
    </Accordion>
  );
};
