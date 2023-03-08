import { combineReducers } from "@reduxjs/toolkit";
import posteReducer from "./newSlice"

const rootReducer = combineReducers({
    poste: posteReducer,
});

export default rootReducer;