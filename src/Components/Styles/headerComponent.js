import styled from "styled-components";

export const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 580px) {
    font-size: 20px;
  }
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  margin-right: 10px;
  border-radius: 7px;
  width: 50%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 500px;
  @media (max-width: 580px) {
    width: 100px;
    font-size: 10px;
  }
  margin-left: 10px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const iconStyle = {
  width: "50px",
  height: "50px",
};
