import React from "react";
import { SearchButton, SearchForm, SearchInput } from "./style";

class Search extends React.Component {
  state = { userName: '' };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchUser(this.state.userName);
  };

  changeState = event => (
    this.setState({ userName: event.target.value })
  );

  render() {
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchInput
          type="text"
          value={this.state.userName}
          onChange={this.changeState}
          placeholder="Github User"
          required
        />
        <SearchButton>Search</SearchButton>
      </SearchForm>
    );
  }
}

export default Search;
