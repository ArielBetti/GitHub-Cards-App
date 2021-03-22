import React, { useEffect, useState } from "react";
import HomeComponent from "@/components/Home";
import faker from "faker";

function Home() {
  const [addToRender, setAddToRender] = useState([]);

  const searchUser = () => {
    setAddToRender(
      new Array(10000).fill().map((value, index) => ({
        id: index,
        name: faker.name.firstName(),
        company: faker.name.jobTitle(),
        avatar_url: faker.image.image(80, 80),
      }))
    );
  }

  return (
    <div>
      <HomeComponent profiles={addToRender} searchUser={searchUser} />
    </div>
  );
}

export default Home;
