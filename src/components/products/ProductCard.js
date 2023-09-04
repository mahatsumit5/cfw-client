import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import image2 from "../../assests/image3.jpg";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CardHeader,
  Skeleton,
  SwipeableDrawer,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const StyledBox = styled(Box)(() => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  backgroundColor: "#fff",
}));

export default function CustomProductCard({ products }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => () => {
    setOpen(!open);
  };
  return (
    <>
      {products?.map((item) => {
        return (
          <Card
            key={item?._id}
            sx={{
              maxWidth: { xs: 250, sm: 350, md: 350 },
              maxHeight: 450,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* <CardHeader
              title={item.title}
              //   subheader="September 14, 2016"
            /> */}
            <CardMedia
              sx={{
                maxWidth: 250,
                maxHeight: 300,
                objectFit: "cover",
                flexGrow: 1,
              }}
              component="img"
              image={
                process.env.REACT_APP_ROOTSERVER +
                "/" +
                item.thumbnail?.slice(6)
              }
              alt={item.title}
            />
            <Link to={`/product/${item.slug}/${item._id}`} className="nav-link">
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" color="text.primary">
                  {item?.title}
                </Typography>
                <Typography variant="caption" color="text.primary">
                  {item.description}
                </Typography>
                <hr></hr>
                <Typography variant="subtitle2 h5" color="text.secondary">
                  {"$" + item.price}
                </Typography>
              </CardContent>
            </Link>

            <CardActions sx={{ position: "relative" }}>
              <Box sx={{ textAlign: "center", pt: 1 }}>
                {/* <Button onClick={toggleDrawer()}>Open</Button> */}
              </Box>
              {/* <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={56}
                disableSwipeToOpen={false}
                ModalProps={{
                  keepMounted: true,
                }}
              > */}
              {/* <StyledBox
                  sx={{
                    top: -55,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    visibility: "visible",
                  }}
                > */}
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton>
                <AddShoppingCartIcon />
              </IconButton>
              {/* </StyledBox>
                <StyledBox
                  sx={{
                    px: 2,
                    pb: 2,
                    height: "100%",
                    overflow: "auto",
                  }}
                > */}
              {/* <Skeleton variant="rectangular" height="100%" />
                </StyledBox>
              </SwipeableDrawer> */}
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
