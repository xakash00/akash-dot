import React, { useEffect, useState } from "react";
import * as tweetAction from "../../redux/actions/quotesAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Margin,
  StyledButton,
  StyledText,
} from "../../styledComponents/styles";
import Card from "../../components/card/tweetsCard";
import * as animationData from "../../assets/lottie/emptyBox.json"
import "antd/dist/antd.css";
import Lottie from "react-lottie";

const FavoriteTweets = ({ mode }) => {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.getItem("localQuotesObj");
  }, []);

  useEffect(() => {
    dispatch(tweetAction.savedQuotes());
  }, [count]);


  const favTweets = useSelector(
    (store) => store.reducers.savedQuotesReducer.data
  );
  const newObj = JSON.parse(localStorage.getItem("localQuotesObj"));

  const handleDelete = (index) => {
    newObj.splice(index, 1);
    localStorage.setItem("localQuotesObj", JSON.stringify(newObj));
    setCount(count + 1)
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="page">
      <div className="text-center">
        <StyledText
          mSize="0.7rem"
          size="1rem"
          color={mode === "light" ? "#112B3C" : "#fff"}
        >
          You have {favTweets.length} tweets in your favourite list
        </StyledText>
        <Lottie options={defaultOptions} height={"20rem"} width={"20rem"} />
        <Margin />
        {Object.values(favTweets).map((item, index) => {
          return (
            <>
              <Card
                key={index}
                delIndex={index}
                mode={mode}
                item={item.data}
                id={item.id}
                handleDelete={handleDelete}
              />

            </>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteTweets;
