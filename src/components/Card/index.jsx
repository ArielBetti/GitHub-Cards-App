import React from "react";
import {
  CardCompany,
  CardContainer,
  CardContent,
  CardImage,
  CardName,
} from "./style";
import { FixedSizeList as List } from "react-window";

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
    height={780}
    itemCount={profiles.length}
    itemSize={120}
    style={{ padding: '15px' }}
    >
      {renderRow}
    </List>
  );
}

export default Card;
