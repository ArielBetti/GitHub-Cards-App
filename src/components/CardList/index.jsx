import React from "react";
import Card from 'components/Card';

class CardList extends React.Component {
  render() {
    const profiles = this.props.profiles;

    return (
      <div>
        {profiles.map(cards => (
          <Card profiles={cards}/>
        ))}
      </div>
    );
  }
}

export default CardList;
