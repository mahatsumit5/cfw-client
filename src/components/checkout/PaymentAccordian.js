import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { payWithCard } from "../../axios/orderAxios";
export const PaymentAccordian = ({ activeStep, payment, setPayment }) => {
  const { paymentMethods } = useSelector((store) => store.paymentInfo);
  const [open, setOpen] = useState(false);
  const handleChange = async (e) => {
    const { value } = e.target;
    console.log(value);
    setPayment({ method: value });
  };
  useEffect(() => {
    if (activeStep === 2) {
      setOpen(!open);
    }
  }, [activeStep]);
  return (
    <Accordion expanded={open} disabled={activeStep < 2}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Typography variant="h5">3.Payment details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl fullWidth>
          <FormLabel id="payment-methods">Choose the payment Methods</FormLabel>
          {paymentMethods.map((pay) => (
            <Paper elevation={2} sx={{ mt: 2, p: 2 }} key={pay._id}>
              <RadioGroup
                aria-labelledby="payment-methods"
                name="controlled-radio-buttons-group"
                value={payment}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={pay.title}
                  control={<Radio />}
                  label={pay.title}
                  checked={payment.method === pay.title}
                />
              </RadioGroup>
            </Paper>
          ))}
        </FormControl>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => {
            setOpen(false);
          }}
          disabled={payment.method === ""}
        >
          Continue
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};
