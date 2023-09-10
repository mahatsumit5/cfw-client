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
import { Link } from "react-router-dom";
import { CardHeader } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/cartSlice";
export default function CustomProductCard({ products }) {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      {products?.map((item) => (
        <Card
          key={item._id}
          sx={{
            maxWidth: { xs: 250, sm: 350, md: 350 },
            maxHeight: 450,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Link
            to={`/product/${item.slug}`}
            className="nav-link"
            key={item._id}
          >
            <CardHeader
              title={item.title}
              //   subheader="September 14, 2016"
            />

            <div style={{ width: "280px", height: "180px" }}>
              <CardMedia
                sx={{
                  width: 280,
                  height: 180,
                  objectFit: "cover",
                }}
                component="img"
                image={
                  process.env.REACT_APP_ROOTSERVER +
                  "/" +
                  item.thumbnail?.slice(6)
                }
                alt={item.title}
              />
            </div>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" color="text.primary">
                {item.slug}
              </Typography>
              <Typography variant="caption" color="text.primary">
                {item.sku}
              </Typography>
              <br></br>
              <Typography variant="subtitle2 h5" color="text.secondary">
                {"$" + item.price}
              </Typography>
            </CardContent>
          </Link>
          <CardActions sx={{ position: "relative" }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon color="error" />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch(setCart({ ...item, orderQty: 1 }));
              }}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
