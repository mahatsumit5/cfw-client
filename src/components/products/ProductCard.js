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
import { Link } from "react-router-dom";
import { Alert, CardHeader, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, setCart } from "../../redux/cartSlice";
import { addTofavAction } from "../../action/userAction";
import { motion } from "framer-motion";
export default function CustomProductCard({ products }) {
  const { user } = useSelector((store) => store.userInfo);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const favIcons = {
    redHeart: <FavoriteIcon color="error" />,
    borderHeart: <FavoriteBorderIcon />,
  };
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    severity: "",
    message: "",
  });
  const handleOnAddToFav = async (item) => {
    const { status, message } = await dispatch(
      addTofavAction({
        _id: user?._id,
        fav: item,
      })
    );
    setSnackbar({
      open: true,
      severity: status,
      message: message.toUpperCase(),
    });
  };
  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={() => {
          setSnackbar({ open: false });
        }}
        width={"100%"}
      >
        <Alert severity={setSnackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
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
