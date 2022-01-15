// land of the thousand imports
import { useEffect } from "react";
import "../App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  postsUsers,
  getAllPosts,
  currentPageNumber,
  postsPerPages,
  getCertainPosts,
  getNextPage,
  getPostById,
} from "../redux/postsReducer/actionCreator";

import PaginationComponent from "../components/paginate/Pagination";
import { PostsListing } from "../components/postsListing/postsListing";

// land of the thousand imports
function Home({ posts, postsPerPage, currentPage, postsFiltered }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts(currentPage, postsPerPage));
  }, []);

  useEffect(() => {
    if (currentPage) {
      dispatch(getCertainPosts(currentPage, postsPerPage));
    }
  }, [posts, currentPage]);

  const paginate = (pageNumber) => dispatch(getNextPage(pageNumber));

  return (
    <div className="App">
      <PostsListing posts={posts} postsFiltered={postsFiltered} />
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={posts?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state?.posts.allPosts,
  currentPage: state?.posts?.currentPage,
  postsPerPage: state?.posts?.postsPerPage,
  postsFiltered: state?.posts?.filteredPosts,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllPosts,
      currentPageNumber,
      postsPerPages,
      getCertainPosts,
      getNextPage,
      getPostById,
    },
    dispatch
  );
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);
