import React, { useEffect, useState } from "react";
import HomeComponent from "@/components/Home";
import faker from "faker";

function Home() {
  const [testRender, setTestRender] = useState([]);

  const searchUser = async (user) => {
    setTestRender(
      new Array(10000)
        .fill()
        .map((value, index) => ({
          id: index,
          name: faker.name.firstName(),
          company: faker.name.jobTitle(),
          avatar_url: faker.image.image(80, 80),
        }))
    );
  };

  return (
    <div>
      <HomeComponent profiles={testRender} searchUser={searchUser} />
    </div>
  );
}

export default Home;
