import React, { useEffect, useReducer } from "react";
import getAll from "../../services/foodService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
const initialState = { foods: [] };

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "FOODS_LOADED":
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};
const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;

  // Load foods using useffecet

  useEffect(() => {
    getAll().then((foods) =>
      dispatch({ type: "FOODS_LOADED", payload: foods })
    );
  }, []);
  return (
    <>
      <Thumbnails foods={foods} />
    </>
  );
};

export default Home;
