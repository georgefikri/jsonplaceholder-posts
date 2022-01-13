import * as actions from "./constants";
import rootReducer from "../rootReducer";
import { PostsServiceServiceFactory } from "../../services";

let PostsService = PostsServiceServiceFactory.getInstance();

export function postsUsers(credentials) {
  return async (dispatch) => {
    try {
      dispatch({
        type: actions.POSTS,
      });
      dispatch({
        type: actions.POSTS_SUCCESS,
        payload: credentials,
      });
    } catch (error) {
      dispatch({
        type: actions.POSTS_FAILURE,
        payload: error,
      });
    }
  };
}

export function getAllPosts() {
  return async (dispatch) => {
    try {
      dispatch({
        type: actions.POSTS,
      });
      const posts = await PostsService.getAll();
      dispatch({
        type: actions.POSTS_SUCCESS,
        payload: posts.data,
      });
    } catch (error) {
      dispatch({
        type: actions.POSTS_FAILURE,
        payload: error,
      });
    }
  };
}

export function getCertainPosts(currentPage, postsPerPage) {
  console.log('currentPage, postsPerPage]]]]', currentPage, postsPerPage)
  return async (dispatch) => {
    try {
      dispatch({
        type: actions.FILTERED_POSTS,
      });
      const posts = await PostsService.getAll();
      const indexOfLastCountry = currentPage * postsPerPage;
      const indexOfFirstCountry = indexOfLastCountry - postsPerPage;
      // console.log('bos hena certain', posts?.data.slice(indexOfFirstCountry, indexOfLastCountry))
      dispatch({
        type: actions.FILTERED_POSTS_SUCCESS,
        payload: posts.data.slice(indexOfFirstCountry, indexOfLastCountry),
      });
    } catch (error) {
      dispatch({
        type: actions.FILTERED_POSTS_FAILURE,
        payload: error,
      });
    }
  };
}

export function currentPageNumber(currentPageNumber) {
  return async (dispatch) => {
    try {
      dispatch({
        type: actions.CURRENT_PAGE,
      });
      dispatch({
        type: actions.CURRENT_PAGE_SUCCESS,
        payload: currentPageNumber,
      });
    } catch (error) {
      dispatch({
        type: actions.CURRENT_PAGE_FAILURE,
        payload: error,
      });
    }
  };
}

export function postsPerPages(postsPerPageNumber) {
  return async (dispatch) => {
    try {
      dispatch({
        type: actions.POSTS_PER_PAGE,
      });
      dispatch({
        type: actions.POSTS_PER_PAGE_SUCCESS,
        payload: postsPerPageNumber,
      });
    } catch (error) {
      dispatch({
        type: actions.POSTS_PER_PAGE_FAILURE,
        payload: error,
      });
    }
  };
}
