import React from 'react';
import { HomeContainer, HomeEmpty, HomeTitle } from './style';
import EmptyIcon from '../../assets/empty.svg';
import CardList from '../CardList';
import Search from '../Search';

class Home extends React.Component {

  render() {
    return (
      <HomeContainer>
        <HomeTitle>
          GitFinder
        </HomeTitle>
        <Search 
          searchUser={this.props.searchUser}
        />
        {this.props.profiles.length === 0 ? (
          <HomeEmpty src={EmptyIcon} alt="Empty state" />
        ) : (
          <CardList profiles={this.props.profiles} />
        )}
      </HomeContainer>
    );
  }
}

export default Home;
