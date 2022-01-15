import * as actions from "./constants";

import { getPosts, removePost, getPostsById } from "../../services/API";

const route = "https://jsonplaceholder.typicode.com";
const serviceRoute = "posts";

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
  return (dispatch) => {
    dispatch({
      type: actions.POSTS,
    });
    // const posts = await PostsService.getAll();
    getPosts()
      .then((posts) => {
        dispatch({
          type: actions.POSTS_SUCCESS,
          payload: posts.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: actions.POSTS_FAILURE,
          payload: error,
        });
      });
  };
}

export function deletePost(id) {
  console.log("theid", id);
  return async (dispatch) => {
    dispatch({
      type: actions.FILTERED_POSTS,
    });
    removePost(id)
      .then((posts) => {
        console.log("postsss", posts);
        dispatch({
          type: actions.FILTERED_POSTS_SUCCESS,
          payload: posts.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: actions.FILTERED_POSTS_FAILURE,
          payload: error,
        });
      });
  };
}

export function getCertainPosts(currentPage, postsPerPage) {
  return async (dispatch) => {
    dispatch({
      type: actions.FILTERED_POSTS,
    });
    getPosts()
      .then((posts) => {
        const indexOfLastCountry = currentPage * postsPerPage;
        const indexOfFirstCountry = indexOfLastCountry - postsPerPage;
        dispatch({
          type: actions.FILTERED_POSTS_SUCCESS,
          payload: posts.data.slice(indexOfFirstCountry, indexOfLastCountry),
        });
      })
      .catch((error) => {
        dispatch({
          type: actions.FILTERED_POSTS_FAILURE,
          payload: error,
        });
      });
  };
}

export function getPostById(id) {
  console.log("inside post by id", id);
  return async (dispatch) => {
    dispatch({
      type: actions.SINGLE_POST,
    });
    getPostsById(id)
      .then((posts) => {
        dispatch({
          type: actions.SINGLE_POST_SUCCESS,
          payload: posts.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: actions.SINGLE_POST_FAILURE,
          payload: error,
        });
      });
  };
}

// navigation paginations actions
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

export function getNextPage(pageNumber) {
  return async (dispatch) => {
    try {
      dispatch({
        type: actions.CURRENT_PAGE,
      });
      dispatch({
        type: actions.CURRENT_PAGE_SUCCESS,
        payload: pageNumber,
      });
    } catch (error) {
      dispatch({
        type: actions.CURRENT_PAGE_FAILURE,
        payload: error,
      });
    }
  };
}
