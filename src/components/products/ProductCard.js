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
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   color: "grey",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function CustomProductCard({ products }) {
  return (
    <>
      {products?.map((item) => {
        return (
          <Card
            key={item._id}
            sx={{
              maxWidth: 250,
              maxHeight: 350,
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
              component="img"
              height="194"
              image={image2}
              //   image={process.env.REACT_APP_ROOTSERVER + "/" + item.thumbnail}
              alt="Paella dish"
            />
            <Link to={`product/` + item._id} className="nav-link">
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" color="text.primary">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {item.description?.slice(0, 100)}
                </Typography>
                <Typography variant="subtitle2 h5" color="text.secondary">
                  {"$" + item.price}
                </Typography>
              </CardContent>
            </Link>

            <CardActions disableSpacing sx={{}}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton>
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
