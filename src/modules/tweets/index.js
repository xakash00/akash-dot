import React, { useEffect, useState } from "react";
import * as tweetAction from "../../redux/actions/quotesAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Margin,
  SearchBox,
  SearchIcon,
  ThemedText,
  TweetCard,
} from "../../styledComponents/styles";
import Skeleton from "react-loading-skeleton";
import { initialQuotesObj } from "../../redux/config";
import { v1 as uuidv1 } from "uuid";
import { toast } from "react-toastify";
import Card from "../../components/card";
import ReactPaginate from "react-paginate";
import {
  Box,
  SearchPlaceholder,
} from "../../components/loading/placeholderLoading";
import NoResults from "../../components/noResults";
import * as Animation from "../../assets/noResults.json"
const Tweets = ({ mode }) => {
  const [perPage] = useState(10);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const localQuotesObj = initialQuotesObj ?? [];
  const tweetReducer = useSelector((store) => store.reducers.tweetReducer);
  const totalItem = tweetReducer.data ? tweetReducer.data.length : 1643;

  console.log(tweetReducer.loading, "hello");
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  useEffect(() => {
    dispatch(tweetAction.quotes());
    setPageCount(Math.ceil(totalItem / perPage));
  }, []);

  const handleAdd = (data) => {
    localQuotesObj.push({ id: uuidv1(), data });
    console.log(localQuotesObj);
    localStorage.setItem("localQuotesObj", JSON.stringify(localQuotesObj));
    toast.success("Item saved Successfully");
  };

  const handleDelete = (id) => {
    localQuotesObj.splice(
      localQuotesObj.findIndex((item) => item.id === id, 1)
    );
    localStorage.setItem("localQuotesObj", JSON.stringify(localQuotesObj));
  };

  const filterData = Object.values(tweetReducer.tweets).filter((item) => {
    if (search === "") {
      return item;
    } else if (
      item.author !== null &&
      item.author.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
  });
  return (
    <>
      <div className="mx-auto page text-center">
      <Margin />
        {tweetReducer.loading ? (
          <Skeleton wrapper={SearchPlaceholder} />
        ) : (
          <div>
            <SearchBox
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              name="search"
              placeholder="Search by Author"
              color={mode === "light" ? "#000" : "#fff"}
            />
            <SearchIcon className="ri-search-line searchIcon"></SearchIcon>
          </div>
        )}

        <Margin />
        {tweetReducer.loading === true ? (
          <Skeleton wrapper={Box} count={10} />
        ) : filterData.length === 0 ? (
          <NoResults/>
        ) : (
          filterData?.slice(offset, offset + perPage)?.map((item, index) => {
            return (
              <>
                <Card
                  mode={mode}
                  handleAdd={handleAdd}
                  handleDelete={handleDelete}
                  key={index}
                  item={item}
                ></Card>
              </>
            );
          })
        )}
        <div className="d-flex align-items-center mt-4">
          <ReactPaginate
            pageCount={pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
          />
        </div>
      </div>
    </>
  );
};

export default Tweets;
