import * as actions from "./constants";
const initialState = {
  allPosts: [],
  filteredPosts: [],
  react_loading: false,
  error: null,
  currentPage: 1,
  postsPerPage: 10,
  singlePost: {},
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POSTS: {
      return {
        ...state,
        react_loading: true,
        allPosts: null,
        error: false,
      };
    }
    case actions.POSTS_SUCCESS: {
      return {
        ...state,
        react_loading: false,
        error: false,
        allPosts: action.payload,
      };
    }
    case actions.POSTS_FAILURE: {
      return {
        ...state,
        react_loading: false,
        error: action.payload,
      };
    }

    // current page
    case actions.CURRENT_PAGE: {
      return {
        ...state,
        react_loading: true,
        currentPage: null,
        error: false,
      };
    }
    case actions.CURRENT_PAGE_SUCCESS: {
      return {
        ...state,
        react_loading: false,
        error: false,
        currentPage: action.payload,
      };
    }
    case actions.CURRENT_PAGE_FAILURE: {
      return {
        ...state,
        react_loading: false,
        error: action.payload,
      };
    }

    // posts per page
    case actions.POSTS_PER_PAGE: {
      return {
        ...state,
        react_loading: true,
        postsPerPage: null,
        error: false,
      };
    }
    case actions.POSTS_PER_PAGE_SUCCESS: {
      return {
        ...state,
        react_loading: false,
        error: false,
        postsPerPage: action.payload,
      };
    }
    case actions.POSTS_PER_PAGE_FAILURE: {
      return {
        ...state,
        react_loading: false,
        error: action.payload,
      };
    }

    // filtered posts
    case actions.FILTERED_POSTS: {
      return {
        ...state,
        react_loading: true,
        filteredPosts: null,
        error: false,
      };
    }
    case actions.FILTERED_POSTS_SUCCESS: {
      return {
        ...state,
        react_loading: false,
        error: false,
        filteredPosts: action.payload,
      };
    }
    case actions.FILTERED_POSTS_FAILURE: {
      return {
        ...state,
        react_loading: false,
        error: action.payload,
      };
    }

    // single post

    case actions.SINGLE_POST: {
      return {
        ...state,
        react_loading: true,
        singlePost: null,
        error: false,
      };
    }
    case actions.SINGLE_POST_SUCCESS: {
      return {
        ...state,
        react_loading: false,
        error: false,
        singlePost: action.payload,
      };
    }
    case actions.SINGLE_POST_FAILURE: {
      return {
        ...state,
        react_loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
