import React, { useEffect, useReducer } from "react";
import { Rate } from "antd";
import * as marketAction from "../../redux/actions/marketPlaceAction";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  CardBody,
  FooterImg,
  ProductCard,
  ProductImage,
} from "../../styledComponents/styles";
import ProdCard from "../../components/card/productsCard";
import {
  Box,
  InlineWrapperWithMargin,
  ProductPlaceHolder,
  ProductPlaceholder,
} from "../../components/loading/placeholderLoading";
import {
  getSortedProducts,
  sortingReducer,
} from "../../redux/reducer/sortingReducer";
const Products = () => {
  const data = useSelector((store) => store.reducers.marketReducer);
  const [{ sortBy }, dispatch] = useReducer(sortingReducer, { sortBy: "none" });
  const sortedData = getSortedProducts([...data.products], sortBy, "laptops");
  console.log(sortedData);
  const dispatchAction = useDispatch();
  useEffect(() => {
    dispatchAction(marketAction.marketPlace());
  }, []);

  function discountPercent(val, percent) {
    var discount = val * (percent / 100);
    return (discount + val).toFixed(0);
  }
  return data.loading === true ? (
    <></>
  ) : (
    <div className="row">
      {Object.values(sortedData).map((item, index) => {
        return (
          <div key={index} className="col-lg-4  col-md-6 col-sm-12">
            <ProdCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
