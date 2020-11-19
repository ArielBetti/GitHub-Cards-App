import React from "react";
import HomeComponent from "@/components/Home";
import api from "@/services/api";

class Home extends React.Component {

  searchUser = async (user) => {
    const resp = await api.get(user);
    const { data } = resp;
    this.setState( prevState => ({
      responseProfiles: [...prevState.responseProfiles, data]
    }));
    console.log(data);
  };

  state = {
    responseProfiles: [],
  };

  render() {
    return (
      <HomeComponent 
        profiles={this.state.responseProfiles}
        searchUser={this.searchUser}
      />
    );
  }
}

export default Home;
