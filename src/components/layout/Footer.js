import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { subscribe } from "../../axios/subscribeAxios";
const Item = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  };
});

export const Footer = () => {
  const [email, setEmail] = useState("email");

  const date = new Date().getFullYear();
  return (
    <Box
      sx={{
        p: 5,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
        minHeight: "10vh",
        backgroundColor: "aliceblue",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div>
          <Typography variant="h6">Social Media</Typography>
          <Stack direction="row" spacing={2}>
            <Item>
              <FacebookIcon />
            </Item>
            <Item>
              <InstagramIcon />
            </Item>
          </Stack>
        </div>
        <div>
          <Typography variant="h6">Copyright</Typography>

          <Typography sx={{ margin: "auto" }}>
            &copy;Copyright © 2019-{date} by CFW{" "}
          </Typography>
        </div>
        <div>
          <Typography variant="h6">Accepted Payment</Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}
          >
            <Item>Visa</Item>
            <Item>Cash</Item>
            <Item>Apple Pay</Item>
            <Item>AfterPay</Item>
            <Item>Bank Debit</Item>
          </Stack>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h6">Subscribe to our newsletter</Typography>
        <TextField label="Email" />
        <Button
          variant="outlined"
          onClick={() => {
            subscribe({ email: email });
          }}
        >
          Subscribe
        </Button>
        <Typography variant="body2">
          Get regular updates on our product with our newsletter.
        </Typography>
      </Box>
    </Box>
  );
};
