import React, { useEffect } from "react";
import { Rate } from 'antd';
import * as marketAction from "../../redux/actions/marketPlaceAction";
import { useDispatch, useSelector } from "react-redux";
import { CardBody, FooterImg, ProductCard, ProductImage } from "../../styledComponents/styles";
import ProdCard from "../../components/card/productsCard";
const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(marketAction.marketPlace());
    }, []);
    const data = useSelector((store) => store.reducers.marketReducer);
    console.log(data);


    function discountPercent(val, percent) {
        var discount = val * (percent / 100);
        return (discount + val).toFixed(0)
    }
    console.log(discountPercent(899, 17.94))
    return (
        <div className="d-flex justify-content-center">
            <div>
               <ProdCard/>
            </div>
        </div>
    );
};

export default Products;


