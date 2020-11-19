import React from "react";
import {
  CardCompany,
  CardContainer,
  CardContent,
  CardImage,
  CardName,
} from "./style";


class Card extends React.Component {
  render() {
    const profiles = this.props.profiles;

    return (
      <CardContainer>
        <CardImage src={profiles.avatar_url} alt="Profile Pic" />
        <CardContent>
          <CardName>{profiles.name}</CardName>
          <CardCompany>{profiles.company}</CardCompany>
        </CardContent>
      </CardContainer>
    );
  }
}

export default Card;
