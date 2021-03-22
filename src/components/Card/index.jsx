import React from "react";
import {
  CardCompany,
  CardContainer,
  CardContent,
  CardImage,
  CardName,
} from "./style";

const Card = ({ profiles }) => {
  return (
    <CardContainer>
      <CardImage src={profiles.avatar_url} alt="Profile Pic" />
      <CardContent>
        <CardName>{profiles.name}</CardName>
        <CardCompany>{profiles.company}</CardCompany>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
