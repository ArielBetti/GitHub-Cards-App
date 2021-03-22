import React from "react";
import Card from "components/Card";

class CardList extends React.Component {
  render() {
    const profiles = this.props.profiles;

    return <Card profiles={profiles} />;
  }
}

export default CardList;
