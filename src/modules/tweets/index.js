import React, { useEffect } from "react";
import * as tweetAction from "../../redux/actions/quotesAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Margin,
  SearchBox,
  SearchIcon,
  ThemedText,
  TweetCard,
} from "../../styledComponents/styles";
import AOS from "aos";
const Tweets = ({ mode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const dispatch = useDispatch();
  const tweetReducer = useSelector((store) => store.reducers.tweetReducer);
  console.log(tweetReducer.tweets, "hello");

  useEffect(() => {
    dispatch(tweetAction.quotes());
  }, []);

  return (
    <div className="mx-auto page text-center">
      <SearchBox placeholder="Search by Author" />
      <SearchIcon className="ri-search-line searchIcon"></SearchIcon>
      <Margin />
      {Object.values(tweetReducer?.tweets)?.map((item, index) => {
        return (
          <>
            <TweetCard key={index}>{item.text}</TweetCard><Margin/>
          </>
        );
      })}
    </div>
  );
};

export default Tweets;
