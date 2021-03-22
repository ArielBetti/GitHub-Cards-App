import React from "react";
import Card from "components/Card";

const CardList = ({ profiles }) => (
  <div>
    {profiles.map((cards) => (
      <Card profiles={cards} />
    ))}
  </div>
);

export default CardList;
