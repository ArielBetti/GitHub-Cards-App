import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 25px;
  min-width: 20em;
  max-width: 50em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #4a148c;
`;

export const CardImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  margin-right: 20px;
`;

export const CardName = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

export const CardCompany = styled.p`
  font-size: 15px;
  margin-top: 5px;
  font-weight: bold;
`;

export const StyledPaginateContainer = styled.div`
  .pagination {
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    font-weight: bold;
    border: none;
  }

  li {
    cursor: pointer;
    list-style: none;
    background-color: #4a148c;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    color: white;
  }

  ul {
    padding: 0px;
  }

  .break-me {
    cursor: default;
  }
  .active {
    background-color: #12005e;
    color: white;
  }
`;
