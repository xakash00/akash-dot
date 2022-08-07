import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import queryString from "query-string";
import * as marketAction from "../../redux/actions/marketPlaceAction";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { SliderDiv, StyledText } from "../../styledComponents/styles";
import { Rate, Spin } from "antd";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const value = queryString.parse(window.location.search);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    dispatch(marketAction.productDetailsAction(value.id, onSuccess, onError));
  }, []);

  const onSuccess = (data) => {
    console.log(data);
    setData(data);
    setLoading(false);
  };
  const onError = (data) => {
    console.log(data);
    setLoading(false);
  };
console.log(loading)
  return loading ? (
    <div className="d-flex justify-content-center mt-5">
      <Spin size="large" />
    </div>
  ) : (
    <div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-6">
            <Carousel autoPlay={true} autoFocus={true} width={"100%"}>
              {data?.images?.map((item, index) => {
                return (
                  <SliderDiv key={index}>
                    <img
                      style={{ borderRadius: "10px", objectFit: "contain" }}
                      src={item}
                    />
                  </SliderDiv>
                );
              })}
            </Carousel>
          </div>
          <div className="col-md-4">
            <div>
              <StyledText color="#112B3C" size="1.3 rem">
                {data.title}
              </StyledText>
              <div className="">
                <Rate allowHalf disabled defaultValue={data.rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
