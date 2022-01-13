// eslint-disable-next-line no-undef
import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer/reducer";

let rootReducer = combineReducers({
  posts: postsReducer,
});
export default rootReducer;
