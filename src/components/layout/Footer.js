import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { subscribeAction } from "../../action/subscribeAction";
import { RiVisaFill } from "react-icons/ri";
import { BsCash } from "react-icons/bs";
import { AiFillApple, AiFillBank } from "react-icons/ai";
import { BiLogoMastercard } from "react-icons/bi";
const Item = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  };
});

export const Footer = () => {
  const [email, setEmail] = useState("");

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
        marginTop: 5,
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
            spacing={1}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            <Item>
              <RiVisaFill />
            </Item>
            <Item>
              <AiFillApple />
            </Item>
            <Item>
              <BsCash />
            </Item>
            <Item>
              <BiLogoMastercard />
            </Item>
            <Item>
              <AiFillBank />
            </Item>
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
        <FormControl></FormControl>
        <TextField
          label="Email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="jonsmith@gmail.com"
        ></TextField>
        <Button
          variant="outlined"
          onClick={() => {
            subscribeAction({ email: email });
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
