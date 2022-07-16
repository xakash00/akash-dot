import React, { useEffect, useState } from "react";
import * as tweetAction from "../../redux/actions/quotesAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Margin,
  StyledButton,
  StyledText,
} from "../../styledComponents/styles";
import Card from "../../components/card";
import { Modal } from "antd";
import "antd/dist/antd.css";

const FavoriteTweets = ({ mode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [id, setId] = useState("  ")
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.getItem("localQuotesObj");
  }, []);
  useEffect(() => {
    dispatch(tweetAction.savedQuotes());
  }, [isVisible]);
  const favTweets = useSelector(
    (store) => store.reducers.savedQuotesReducer.data
  );
  const newObj = JSON.parse(localStorage.getItem("localQuotesObj"));

  const handleDelete = (id) => {
    newObj.splice(id, 1);
    localStorage.setItem("localQuotesObj", JSON.stringify(newObj));
    handleHide();
  };
  const handleShow = () => {
    setIsVisible(true);
  };
  const handleHide = () => {
    setIsVisible(false);
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
        <Margin />
        {Object.values(favTweets).map((item, index) => {
          return (
            <>
              <Card
                key={index}
                handleHide={handleHide}
                handleShow={handleShow}
                mode={mode}
                item={item.data}
                id={item.id}
                handleDelete={handleDelete}
              />

            </>
          );
        })}
      </div>
      <Modal
        bodyStyle={
          mode === "light"
            ? {
              backgroundImage: `linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)`,
            }
            : {
              backgroundImage: `linear-gradient(147deg, #000000 0%, #2c3e50 74%)`,
            }
        }
        centered
        visible={isVisible}
        closable={false}
        footer={null}
        maskClosable={false}
      >
        <div>
          <StyledText
            mSize="0.7rem"
            size="1rem"
            color={mode === "light" ? "#112B3C" : "#fff"}
          >
            Are you Sure , you want to delete this item?
          </StyledText>
          <Margin />
          <div className="float-end">
            <StyledButton
              onClick={() => handleHide()}
              className="me-3"
              mSize="0.7rem"
              size="1rem"
              bgColor="none"
              color={mode === "light" ? "#112B3C" : "#fff"}
            >
              Cancel
            </StyledButton>
            <StyledButton
              onClick={() => handleDelete()}
              mSize="0.7rem"
              size="1rem"
              bgColor="#FF0000"
              color="fff"
            >
              Delete
            </StyledButton>
          </div>
        </div>
        <Margin />
      </Modal>
    </div>
  );
};

export default FavoriteTweets;
