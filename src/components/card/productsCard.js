import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import {
  CardBody,
  ProductCard,
  ProductImage,
  Span,
  StyledButton,
  StyledText,
} from "../../styledComponents/styles";
import moment from "moment";
import { useCart } from "react-use-cart";

const ProdCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  function discountPercent(val, percent) {
    var discount = val * (percent / 100);
    return (discount + val).toFixed(0);
  }
  return (
    <div className="">
      <div>
        <ProductCard
          hover={isHovered}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onFocusCapture={() => setIsHovered(true)}
          className="card mb-5"
        >
          <ProductImage
            hover={isHovered}
            src={item.thumbnail}
            className="img-fluid rounded-start"
            alt="product"
          />
          <CardBody className="card-body">
            <StyledText
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              color="#112B3C"
              size="0.9rem"
              className="card-title"
            >
              {item.title}
            </StyledText>
            <StyledText color="#565959" size="0.7rem">
              {item.brand}
            </StyledText>
            <Rate allowHalf disabled defaultValue={item.rating} />
            <br />
            <Span>
              <Span color="#B12704" size="1rem">
                ${item.price}
              </Span>
              <Span
                style={{ textDecoration: "line-through" }}
                color="#565959"
                size="0.7rem"
              >
                {"\n"}${discountPercent(item.price, item.discountPercentage)}
              </Span>
              <Span color="#112B3C" size="0.7rem">
                {"\n"}({item.discountPercentage}% off){" "}
              </Span>
            </Span>
            <StyledText color="#565959" size="0.7rem">
              Get it by tomorrow,{" "}
              {moment().add(1, "days").format("DD MMMM").toString()}
            </StyledText>
            <br />
            <StyledButton
            onClick={()=>addItem(item)}
              color="#112B3C"
              bgImage={`linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);`}
              bgColor="#fbb034"
            >
              View details
            </StyledButton>
          </CardBody>
        </ProductCard>
      </div>
    </div>
  );
};

export default ProdCard;
