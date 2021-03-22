import React from "react";
import Card from "components/Card";

class CardList extends React.Component {
  render() {
    const profiles = this.props.profiles;

    return (
      <div>
        <Card profiles={profiles} setPagination={this.props.setPagination} />
      </div>
    );
  }
}

export default CardList;
