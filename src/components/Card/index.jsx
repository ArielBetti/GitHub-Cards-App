import React from "react";
import {
  CardCompany,
  CardContainer,
  CardContent,
  CardImage,
  CardName,
} from "./style";
import { List } from "react-virtualized";

function Card({ profiles }) {
  const renderRow = ({ index, key, style }) => (
    <CardContainer key={key}>
      <CardImage src={profiles[index].avatar_url} alt="Profile Pic" />
      <CardContent>
        <CardName>{profiles[index].name}</CardName>
        <CardCompany>{profiles[index].company}</CardCompany>
      </CardContent>
    </CardContainer>
  );
  return (
    <List
      width={500}
      height={700}
      rowRenderer={renderRow}
      rowCount={profiles.length}
      rowHeight={120}
    />
  );
}

export default Card;
