import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import pants from "../../assests/pants.avif";
import jacket from "../../assests/jacket.avif";
import sweater from "../../assests/sweater.jpg";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        margin: 2,
        flexWrap: "nowrap",
        overflowX: "auto",
        overflowY: "hidden",
        justifyContent: "flex-start",
        height: "100%",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          height: 250,
          width: 200,
          display: "flex",
          flexWrap: "nowrap",

          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Just Landed</Typography>
        <Typography variant="caption">
          Be the first to shop our latest products
        </Typography>
        <Link to="/" className="nav-link">
          Shop the latest
        </Link>{" "}
      </Paper>
      <Paper sx={{ height: 250, width: 200 }}>
        <img
          loading="lazy"
          className="image"
          src={pants}
          alt=""
          height={250}
          width={200}
          style={{ objectFit: "cover" }}
        />
      </Paper>
      <Paper sx={{ height: 250, width: 200 }}>
        <img
          loading="lazy"
          className="image"
          src={jacket}
          alt=""
          height={250}
          width={200}
        />
      </Paper>
      <Paper sx={{ height: 250, width: 200 }}>
        <img
          loading="lazy"
          className="image"
          src={sweater}
          alt=""
          height={250}
          width={200}
        />
      </Paper>
      <Paper sx={{ height: 250, width: 200 }}>
        <img
          loading="lazy"
          className="image"
          src={sweater}
          alt=""
          height={250}
          width={200}
        />
      </Paper>
      <Paper sx={{ height: 250, width: 200 }}>
        <img
          loading="lazy"
          className="image"
          src={sweater}
          alt=""
          height={250}
          width={200}
        />
      </Paper>
      <Paper sx={{ height: 250, width: 200 }}>
        <img
          loading="lazy"
          className="image"
          src={sweater}
          alt=""
          height={250}
          width={200}
        />
      </Paper>
    </Box>
  );
};
