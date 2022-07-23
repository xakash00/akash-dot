import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import {
    CardBody,
    ProductCard,
    ProductImage,
} from "../../styledComponents/styles";
const ProdCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    function discountPercent(val, percent) {
        var discount = val * (percent / 100);
        return (discount + val).toFixed(0);
    }
    return (
        <div className="d-flex justify-content-center">
            <div>
                <ProductCard
                    hover={isHovered} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onFocus={() => setIsHovered(true)}
                    onFocusCapture={() => setIsHovered(true)}
                    className="card mb-3"
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <ProductImage
                                hover={isHovered}
                                src="https://dummyjson.com/image/i/products/10/thumbnail.jpeg"
                                className="img-fluid rounded-start"
                                alt="product"
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7">
                            <CardBody className="card-body">
                                <h5 className="card-title">A taste of indian kitchen</h5>
                                <p>SmartPhone</p>
                                <Rate allowHalf disabled defaultValue={2.9} />
                            </CardBody>
                        </div>
                    </div>
                </ProductCard>
            </div>
        </div>
    );
};

export default ProdCard;
