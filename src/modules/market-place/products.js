import React, { useEffect, useReducer } from "react";
import { Rate } from "antd";
import * as marketAction from "../../redux/actions/marketPlaceAction";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Menu } from "antd";
import ProdCard from "../../components/card/productsCard";
import {
  getSortedProducts,
  sortingReducer,
} from "../../redux/reducer/sortingReducer";
import { Button, SearchBox, SearchIcon } from "../../styledComponents/styles";
import { useState } from "react";
import NoResults from "../../components/noResults";
const Products = ({ mode }) => {
  const data = useSelector((store) => store.reducers.marketReducer);
  const [type, setType] = useState("");
  const [{ sortBy }, dispatch] = useReducer(sortingReducer, { sortBy: "none" });
  const sortedData = getSortedProducts([...data.products], sortBy, type);
  const [search, setSearch] = useState("");

  const dispatchAction = useDispatch();

  const categories = useSelector(
    (store) => store.reducers.categoryReducer.category
  );
  console.log(categories);

  useEffect(() => {
    dispatchAction(marketAction.marketPlace());
    dispatchAction(marketAction.categoryAction());
  }, []);

  const filterData = Object.values(sortedData).filter((item) => {
    if (search === "") {
      return item;
    } else if (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
  });
  return data.loading === true ? (
    <div className="d-flex justify-content-center mt-5">
      <Spin />
    </div>
  ) : (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <SearchBox
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          name="search"
          placeholder="Search..."
          color={mode === "light" ? "#000" : "#fff"}
        />
        <Dropdown overlay={<DropdownMenu dispatch={dispatch} />}>
          <Button className="btn d-flex" onClick={(e) => e.preventDefault()}>
            <p className="me-3">Sort By</p>
            <i className="ri-equalizer-fill"></i>
          </Button>
        </Dropdown>
      </div>
      <div className="d-flex mt-4 choiceChipGrp">
        {categories.map((item, index) => {
          return (
            <div className="">
              <Button
                key={index}
                onClick={() => {
                  setType(item);
                  dispatch({ type: "SORT", payload: "CATEGORY", item });
                }}
                className="m-2"
              >
                {item}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="row mt-5">
        {filterData.map((item, index) => {
          return (
            <div key={index} className="col-lg-4  col-md-6 col-sm-12">
              <ProdCard item={item} />
            </div>
          );
        })}
        <div className="text-center">
          {filterData.length === 0 && <NoResults />}
        </div>
      </div>
    </div>
  );
};

export default Products;

const DropdownMenu = ({ dispatch }) => {
  return (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Button
              onClick={() =>
                dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
              }
            >
              Price - High to Low
            </Button>
          ),
        },
        {
          key: "2",
          label: (
            <Button
              onClick={() =>
                dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
              }
            >
              Price - Low to High
            </Button>
          ),
        },
        {
          key: "3",
          label: (
            <Button
              onClick={() => dispatch({ type: "SORT", payload: "RATING" })}
            >
              By Rating
            </Button>
          ),
        },
      ]}
    />
  );
};
