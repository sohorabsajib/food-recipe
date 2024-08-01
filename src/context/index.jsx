import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearchParams("");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParams("");
    }
  }

  console.log(loading, recipeList);
  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        loading,
        recipeList,
        setSearchParams,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};
