import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = ["Review Cart", "User Details", "Payment"];
export const CustomStepper = (props) => {
  return (
    <Box>
      <Stepper activeStep={props.activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
