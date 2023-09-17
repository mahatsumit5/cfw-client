import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
export const UserDetailsAccordian = ({ activeStep, setactiveStep }) => {
  const { user } = useSelector((store) => store.userInfo);
  const [userForm, setUserForm] = useState({});
  useEffect(() => {
    setUserForm(user);
  }, [user]);

  const handleOnUserChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  return (
    <Accordion disabled={activeStep === 0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">2.User details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <FormControl>
            <OutlinedInput
              fullWidth
              value={userForm.fName}
              name="fName"
              onChange={handleOnUserChange}
            />
          </FormControl>
        </div>
        <div>
          <Button
            onClick={() => {
              setactiveStep(2);
            }}
          >
            Confirm
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
