import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { removeItemFromCart } from "../../redux/cartSlice";

export const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <main className="main">
        {cart.map((item) => (
          <div>
            <p>{item.title}</p>
            <Button
              onClick={() => {
                dispatch(removeItemFromCart(item._id));
              }}
            >
              delete
            </Button>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};
