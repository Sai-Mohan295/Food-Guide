import React, { useState } from "react";
import axios from "axios";
import { BsSearchHeartFill } from "react-icons/bs";
import {
  Header,
  AppNameComponent,
  SearchComponent,
  SearchInput,
  iconStyle,
} from "./Components/Styles/headerComponent";
import {
  Container,
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  CaloriesCount,
  SeeMoreText,
  Anchor,
} from "./Components/Styles/recipeComponent";

const APP_ID = "1bca4f26";
const APP_KEY = "75c258c9979a9c70fe09686484d8da49";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const fetchRecipe = (searchString) => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((item) => setRecipeList(item.data.hits));
  };

  // debouncing Concept --> for calling event only once
  const [timeOutId, setTimeOutId] = useState();
  const onInputChange = (e) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => fetchRecipe(e.target.value), 700);
    setTimeOutId(timeOut);
  };
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <lord-icon
            src="https://cdn.lordicon.com/fsegwpts.json"
            trigger="loop"
            colors="primary:#ebe6ef,secondary:#ffc738,tertiary:#f28ba8"
            style={iconStyle}
          ></lord-icon>
          Food Guide
        </AppNameComponent>
        <SearchComponent>
          <BsSearchHeartFill color="black" />
          <SearchInput
            placeholder="Search any food item"
            onChange={onInputChange}
          />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        <div>
          <h1>Search Any Food Item</h1>
          <h4>Try with yummy paneer😋</h4>
        </div>
        {recipeList.length &&
          recipeList.map((recipeItem, index) => {
            return (
              <RecipeContainer key={index}>
                <CoverImage src={recipeItem.recipe.image} />
                <RecipeName>{recipeItem.recipe.label}</RecipeName>
                <CaloriesCount>
                  {recipeItem.recipe.calories} Calories
                </CaloriesCount>
                <Anchor href={recipeItem.recipe.url} target="_blank">
                  <SeeMoreText>See Recipe</SeeMoreText>
                </Anchor>
              </RecipeContainer>
            );
          })}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
