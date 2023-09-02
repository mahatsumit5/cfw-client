import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import { getProducts } from "../../axios/categoryAndProductAxios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddIcon from "@mui/icons-material/Add";
export const ProductLandingPage = () => {
  const { _id } = useParams();
  const [product, setproduct] = useState({});
  const [showDesc, setShowDesc] = useState(false);
  useEffect(() => {
    async function getdata() {
      const { data } = await getProducts(_id);
      setproduct(data);
    }
    getdata();
  }, [_id]);
  return (
    <div>
      <UserLayout>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",

            flexWrap: "wrap",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <div className="d-flex gap-4">
            <Box sx={{ flexGrow: 2 }}>
              <Box
                sx={{
                  width: "100%",
                  height: 500,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                Image
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                gap: 5,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack direction="column" gap={1}>
                <Typography variant="h5">{product.title}</Typography>
                <Rating name="read-only" value={4} readOnly />
              </Stack>
              <span className="d-flex justify-content-between">
                <Typography variant="subtitle1">
                  Price:${product.price}
                </Typography>
              </span>
              <Stack spacing={3}>
                <Typography variant="subtitle1">Color</Typography>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: "red" }}>R</Avatar>
                  <Avatar sx={{ bgcolor: "green" }}>G</Avatar>
                  <Avatar sx={{ bgcolor: "blue" }}>B</Avatar>
                  <Avatar sx={{ bgcolor: "yellow" }}>Y</Avatar>
                </Stack>
              </Stack>
              <span className="d-flex">
                <Button
                  variant="outlined"
                  className="flex-grow-1"
                  startIcon={<ShoppingCartCheckoutIcon />}
                >
                  Buy
                </Button>
                <Button
                  variant="error"
                  className="flex-grow-3"
                  endIcon={<FavoriteIcon color="error" />}
                >
                  fav
                </Button>
              </span>
            </Box>
          </div>

          <Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ p: 1 }}>Product Details</Typography>{" "}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{product.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Typography variant="h6" style={{ fontWeight: "bolder" }}>
              You may also like
            </Typography>
          </Box>
        </Container>
      </UserLayout>
    </div>
  );
};
