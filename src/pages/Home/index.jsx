import React, { useEffect, useState } from "react";
import HomeComponent from "@/components/Home";
import faker from "faker";

function Home() {
  const [testRender, setTestRender] = useState([]);

  const searchUser = async (user) => {
    setTestRender({
      data: new Array(10000).fill().map((value, index) => ({
        id: index,
        name: faker.name.firstName(),
        company: faker.name.jobTitle(),
        avatar_url: faker.image.image(80, 80),
      })),
      offset: 0,
      numberPerPage: 4,
      pageCount: 0,
      currentData: []
    });
  };

  useEffect(() => {
    setTestRender((prevState) => ({
      ...prevState,
      pageCount: prevState.data ? prevState.data.length / prevState.numberPerPage : null,
      currentData: prevState.data ? prevState.data.slice(testRender.offset, testRender.offset + testRender.numberPerPage) : null
    }))
  }, [testRender.numberPerPage, testRender.offset])

  return (
    <div>
      <HomeComponent profiles={testRender} searchUser={searchUser} setPagination={setTestRender} />
    </div>
  );
}

export default Home;
