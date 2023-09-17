import React from "react";
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
export const PaymentAccordian = ({ activeStep, payment, setPayment }) => {
  const { paymentMethods } = useSelector((store) => store.paymentInfo);
  const handleChange = (e) => {
    const { value } = e.target;
    setPayment({ method: value });
  };
  return (
    <Accordion disabled={activeStep < 2}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Continue
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};
