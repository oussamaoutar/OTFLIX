import { combineReducers } from "redux";
import movieDataReducer from "./movieDataSlice";
import blogDataReducer from './blogDataSlice';
import authReducer from "./authReducers";

const rootReducer = combineReducers({
  movieData: movieDataReducer,
  blogData: blogDataReducer,
  auth: authReducer,
});

export default rootReducer;
