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
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/orderSlice";

const initialState = {
  method: "",

  isPaid: false,
};
export const PaymentAccordian = ({ activeStep, totalAmount }) => {
  const { paymentMethods } = useSelector((store) => store.paymentInfo);
  const [open, setOpen] = useState(false);
  const [payment, setPayment] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = async (e) => {
    const { value } = e.target;
    setPayment({ ...payment, method: value, totalAmount });
  };
  useEffect(() => {
    if (activeStep === 2) {
      setOpen(!open);
    }
  }, [activeStep]);

  const handleOnContinue = () => {
    dispatch(setOrder({ payment, name: "paymentMethod" }));
    setOpen(false);
  };
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
          onClick={handleOnContinue}
          disabled={payment.method === ""}
        >
          Continue
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};
