import React, { useState } from "react";
import {
  CardCompany,
  CardContainer,
  CardContent,
  CardImage,
  CardName,
} from "./style";
import InfiniteScroll from "react-infinite-scroll-component";

const Card = ({ profiles }) => {
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });

  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(
    profiles.slice(count.prev, count.next)
  );

  const getMoreData = () => {
    if (current.length === profiles.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(profiles.slice(count.prev + 10, count.next + 10))
      );
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

  return (
    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      style={{padding: '5px'}}
    >
      <div>
        {current &&
          current.map((item, index) => (
            <CardContainer key={index}>
              <CardImage src={item.avatar_url} alt="Profile Pic" />
              <CardContent>
                <CardName>{item.name}</CardName>
                <CardCompany>{item.company}</CardCompany>
              </CardContent>
            </CardContainer>
          ))}
      </div>
    </InfiniteScroll>
  );
};

export default Card;
