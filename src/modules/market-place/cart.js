import React from "react";
import { useCart } from "react-use-cart";
import ProdCard from "../../components/card/productsCard";
import * as animationData from "../../assets/lottie/emptyCart.json";
import Lottie from "react-lottie";
import { StyledButton, StyledText } from "../../styledComponents/styles";
import { useNavigate } from "react-router-dom";

const Cart = ({ mode }) => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return isEmpty ? (
    <div className="mt-5">
      <div className="text-center">
        <StyledText mSize="0.7rem" size="1rem" color="#112B3C">
          Oops!!! Your cart is empty
        </StyledText>
        <Lottie options={defaultOptions} height={"15rem"} width={"15rem"} />
        <br />
        <StyledText mSize="0.7rem" size="0.8rem" color="#112B3C">
          Looks like you haven't added anything to your cart yet.
        </StyledText>
        <br />
        <br />
        <StyledButton
          onClick={() => navigate("/market-place")}
          style={{ width: "10rem" }}
          color="#112B3C"
          bgImage={`linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);`}
          bgColor="#fbb034"
        >
          Shop Now
        </StyledButton>
      </div>
    </div>
  ) : (
    <div className="row">
      {items.map((item) => {
        return (
          <div className="col-lg-4  col-md-6 col-sm-12">
            <ProdCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
