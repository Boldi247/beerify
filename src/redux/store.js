import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import recipesReducer from "./recipes";

export default configureStore({
    reducer: {
        search: searchReducer,
        recipes: recipesReducer,
    },
});