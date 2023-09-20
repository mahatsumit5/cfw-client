import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { getResetPassLink, resetPassword } from "../../axios/userAxios";
import { useSearchParams } from "react-router-dom";

export const ResetPassword = () => {
  const searchParams = useSearchParams();
  const code = searchParams[0].get("c");
  const paramEmail = searchParams[0].get("e");
  const [formToshow, setForm] = useState("RequestForm");
  const [email, setEmail] = useState({ email: "" });

  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (code && paramEmail) {
      setForm("ResetPass");
    }
  }, [code, paramEmail]);
  const [error, setError] = useState("");
  const handleOnReset = async () => {
    if (password.newPassword !== password.confirmPassword) {
      setError("Password do not match");
      return;
    }
    await resetPassword({
      email: paramEmail,
      code,
      password: password.confirmPassword,
    });
    // call api
  };
  const RequestForm = (
    <Box
      mt={2}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5">Reset Your Password</Typography>
      <Paper elevation={1} sx={{ width: 400 }}>
        <TextField
          fullWidth
          type="email"
          label="Email"
          onChange={(e) => {
            setEmail({ email: e.target.value });
          }}
        />
        <Divider />
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            getResetPassLink(email);
          }}
        >
          Send
        </Button>
      </Paper>
    </Box>
  );

  const ResetPass = (
    <Box
      mt={2}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5">Reset Your Password</Typography>
      <Paper elevation={1} sx={{ width: 400 }}>
        <TextField
          fullWidth
          type="password"
          label="New Password"
          onChange={(e) => {
            setPassword({ ...password, newPassword: e.target.value });
          }}
        />
        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          onChange={(e) => {
            setPassword({ ...password, confirmPassword: e.target.value });
          }}
        />
        <Divider />
        <Typography variant="body" color="red">
          {error}
        </Typography>
        <Button fullWidth variant="contained" onClick={handleOnReset}>
          Reset
        </Button>
      </Paper>
    </Box>
  );

  const forms = {
    RequestForm: RequestForm,
    ResetPass: ResetPass,
  };

  return <UserLayout>{forms[formToshow]}</UserLayout>;
};
