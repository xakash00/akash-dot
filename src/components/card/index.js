import React, { useEffect, useState } from "react";
import {
  TweetCard,
  Avatar,
  Initials,
  StyledText,
  Margin,
  Icon,
  Button,
  Hr,
} from "../../styledComponents/styles";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import Aos from "aos";
import Skeleton from "react-loading-skeleton";
import { Box } from "../loading/placeholderLoading";
import { useLocation } from "react-router-dom";

const Card = ({
  id,
  item,
  handleShow,
  handleHide,
  mode,
  handleAdd,
  handleDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const location = useLocation();
  const color = ["#f50", "#2db7f5", "#87d068", "#108ee9"];
  const index = Math.floor(Math.random() * color.length);
  const tweetQuote = () => {
    let postQuote = `https://twitter.com/intent/tweet?text=${item.text}`;
    window.open(postQuote);
  };
  const onCopyText = () => {
    setIsCopied(true);
    toast.success("Text Copied Successfully");
  };
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up">
      <TweetCard
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onFocusCapture={() => setIsHovered(true)}
      >
        <Button className="float-end" onClick={tweetQuote}>
          <Icon
            hover={isHovered}
            color="#47ccde"
            className="ri-twitter-fill"
          ></Icon>
        </Button>
        <div className="d-flex">
          <Avatar hover={isHovered} color={color[index]}>
            <Initials>
              {" "}
              {item.author !== null
                ? item.author
                  .split(" ")
                  .map((n) => n[0])
                  .splice(0, 2)
                  .join("")
                : "A"}
            </Initials>
          </Avatar>
          <div style={{ width: "1rem" }}></div>
          <div>
            <StyledText
              mSize="0.7rem"
              size="1rem"
              color={mode === "light" ? "#112B3C" : "#fff"}
            >
              {item.author !== null ? item.author : "Anonymus"}
            </StyledText>
            <StyledText mSize="0.7rem" size="0.8rem" color="#ccc">
              @
              {item.author !== null
                ? item.author.replace(/ /g, "_").toLowerCase()
                : "anonymus"}
            </StyledText>
          </div>
        </div>
        <Margin />
        <StyledText
          mSize="0.8rem"
          size="1.1rem"
          color={mode === "light" ? "#112B3C" : "#fff"}
        >
          {item.text}
        </StyledText>
        <Hr color={mode === "light" ? "#000" : "#fff"} />
        <Button
          onClick={() =>
            location.pathname === "/favourite-tweets"
              ? handleShow()
              : handleAdd(item)
          }
        >
          <Icon
            hover={isHovered}
            color="#FF0063"
            className={
              location.pathname === "/favourite-tweets"
                ? "ri-delete-bin-7-fill me-3"
                : "ri-heart-add-fill me-3"
            }
          ></Icon>
        </Button>
        <CopyToClipboard text={item.text}>
          <Button onClick={onCopyText}>
            <Icon
              hover={isHovered}
              color="#47ccde"
              className="ri-file-copy-fill"
            ></Icon>
          </Button>
        </CopyToClipboard>
      </TweetCard>
      <Margin />
    </div>
  );
};

export default Card;
