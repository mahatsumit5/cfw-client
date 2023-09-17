import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
export const UserDetailsAccordian = ({
  activeStep,
  setactiveStep,
  setUserForm,
  userForm,
}) => {
  const handleOnUserChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const [open, setOpen] = useState(false);

  const handleOnSubmit = () => {
    setactiveStep(2);
    setOpen(!open);
  };
  useEffect(() => {
    if (activeStep === 1) {
      setOpen(!open);
    }
  }, [activeStep]);

  return (
    <Accordion expanded={open} disabled={activeStep === 0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Typography variant="h5">2.User details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <FormControl sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",

                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <TextField
                label="First name*"
                value={userForm.fName}
                onChange={handleOnUserChange}
                name="fName"
                type="text"
                margin="normal"
              />
              <TextField
                label="Last name*"
                value={userForm.lName}
                onChange={handleOnUserChange}
                name="lName"
                margin="normal"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "space-between",
                mt: 2,
                minWidth: "100%",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <TextField
                label="Contact*"
                value={userForm.phone}
                onChange={handleOnUserChange}
                name="phone"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email*"
                value={userForm.email}
                onChange={handleOnUserChange}
                name="email"
                margin="normal"
                type="email"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 5,
                justifyContent: "space-between",
                mt: 2,
                minWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Address*"
                value={userForm.address}
                onChange={handleOnUserChange}
                name="address"
                margin="normal"
              />
              {/* <TextField
                label="City*"
                value={userForm.phone}
                onChange={handleOnUserChange}
                name="contact"
                margin="normal"
              /> */}
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                gap: 5,
                justifyContent: "space-between",
                mt: 2,
                minWidth: "100%",
              }}
            >
              <TextField
                label="State*"
                value={userForm.email}
                onChange={handleOnUserChange}
                name="email"
                margin="normal"
              />
              <TextField
                label="Country*"
                value={userForm.address}
                onChange={handleOnUserChange}
                name="country"
                margin="normal"
              />
            </Box> */}
          </FormControl>
        </div>
        <div>
          <Button fullWidth variant="contained" onClick={handleOnSubmit}>
            Confirm
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
