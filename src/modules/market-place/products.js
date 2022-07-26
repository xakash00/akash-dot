import React, { useEffect } from "react";
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
import { Box, ProductPlaceholder } from "../../components/loading/placeholderLoading";
const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(marketAction.marketPlace());
    }, []);
    const data = useSelector((store) => store.reducers.marketReducer);

    function discountPercent(val, percent) {
        var discount = val * (percent / 100);
        return (discount + val).toFixed(0);
    }
    console.log(data.products);
    return (
        <div className="">
            <div className="row">
                {data.loading === true ? (
                    <Skeleton wrapper={ProductPlaceholder} count={10} />
                ) : (

                    Object.values(data.products).map((item, index) => {
                        return (
                            <div key={index} className="col-lg-4  col-md-6 col-sm-12">
                                <ProdCard item={item} />
                            </div>
                        )
                    })


                )}
            </div>
        </div>
    );
};

export default Products;
