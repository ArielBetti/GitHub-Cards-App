import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  font-size: 20px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0,0,0, 0.5);
  padding: 10px;
  border-radius: 5px;
  margin: 10px 3px auto;
`;

export const SearchButton = styled.button`
  border: none;
  background-color: #4a148c;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0,0,0, 0.5);
  color: black;
  margin: 10px 3px auto;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;
