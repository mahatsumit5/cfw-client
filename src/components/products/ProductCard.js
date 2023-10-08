import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Delete from "@mui/icons-material/Delete";
import { Link, useParams } from "react-router-dom";
import { Alert, CardHeader, Divider, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, setCart } from "../../redux/cartSlice";
import { addTofavAction } from "../../action/userAction";
import { motion } from "framer-motion";
import { setSnackbar } from "../../redux/snackbarSlice";
export default function CustomProductCard({ products }) {
  const { slug } = useParams();
  const { user } = useSelector((store) => store.userInfo);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const favIcons = {
    redHeart: <FavoriteIcon color="error" />,
    borderHeart: <FavoriteBorderIcon />,
  };

  const handleOnAddToFav = async (item) => {
    const { status, message } = await dispatch(
      addTofavAction({
        _id: user?._id,
        fav: item,
      })
    );
    dispatch(
      setSnackbar({
        open: true,
        severity: status,
        message: message.toUpperCase(),
        name: "favouriteNotification",
      })
    );
  };

  return (
    <>
      {products?.map((item) => (
        <Card
          key={item._id}
          sx={{
            maxWidth: { xs: 250, sm: 250, md: 250 },
            maxHeight: 450,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Link
            to={`/${slug}/${item.slug}`}
            className="nav-link"
            key={item._id}
          >
            <CardMedia
              sx={{
                width: 250,
                height: 150,
                objectFit: "cover",
              }}
              component="img"
              image={item.thumbnail}
              alt={item.title}
            />

            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",

                gap: 1,
              }}
            >
              <Typography variant="subtitle 2" color="text.primary">
                {item.title}
              </Typography>
              <Typography variant="caption" color="text.primary">
                {item.sku}
              </Typography>

              <Typography variant="subtitle2 h6 " color="text.secondary">
                Price: {"$" + item.price}
              </Typography>
            </CardContent>
          </Link>
          <Divider />
          <CardActions sx={{ position: "relative" }}>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                handleOnAddToFav(item);
              }}
            >
              {user?.favouriteItem?.some((i) => i.sku === item.sku)
                ? favIcons["redHeart"]
                : favIcons["borderHeart"]}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            {cart.some((cartObj) => cartObj._id === item._id) ? (
              <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.65 }}
              >
                <IconButton
                  onClick={() => {
                    dispatch(removeItemFromCart(item._id));
                  }}
                >
                  <Delete color="error" />
                </IconButton>
              </motion.div>
            ) : (
              <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.65 }}
              >
                <IconButton
                  onClick={() => {
                    dispatch(setCart({ ...item, orderQty: 1 }));
                  }}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </motion.div>
            )}
            <></>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
