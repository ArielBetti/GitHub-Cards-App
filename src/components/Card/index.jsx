import React from "react";
import {
  CardCompany,
  CardContainer,
  CardContent,
  CardImage,
  CardName,
  StyledPaginateContainer,
} from "./style";

import ReactPaginate from 'react-paginate';

class Card extends React.Component {
  render() {
    const profiles = this.props.profiles;

    const handlePageClick = (event) => {
      const selected = event.selected;
      const offset = selected * profiles.numberPerPage;
      this.props.setPagination({ ...profiles, offset });
    };

    return (
      <div>

      {profiles.currentData && profiles.currentData.map(((item, index) => (
         <CardContainer>
         <CardImage src={item.avatar_url} alt="Profile Pic" />
         <CardContent>
           <CardName>
             {item.name}
           </CardName>
           <CardCompany>{item.company}</CardCompany>
         </CardContent>
       </CardContainer>
      )))
      }
      <StyledPaginateContainer>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={profiles.pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
      </StyledPaginateContainer>
      </div>
    );
  }
}

export default Card;
