import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
  width: 200px;
`;

export const CoverImage = styled.img`
  height: 200px;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 5px 0;
`;
export const CaloriesCount = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: black;
  padding: 5px 5px;
  color: green;
  margin-bottom: 12px;
`;

export const SeeMoreText = styled(CaloriesCount)`
  color: black;
  background-color: orange;
  margin: 0 50px;
  border-radius: 10px;
`;

export const Anchor = styled.a`
  text-decoration: none;
`;
