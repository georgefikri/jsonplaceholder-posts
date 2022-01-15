// land of the thousand imports
import { useEffect } from "react";
import "./App.scss";
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
} from "./redux/postsReducer/actionCreator";
import { Button, Spinner, Table } from "react-bootstrap";

import PaginationComponent from "./Pagination";
import { PostsListing } from "./components/postsListing";

// land of the thousand imports

import { getFn } from "./services-new";

function App({ posts, postsPerPage, currentPage, postsFiltered }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts(currentPage, postsPerPage));
    // getFn();
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
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts?.length &&
            postsFiltered?.map((post, index) => {
              return (
                <tr key={post?.id}>
                  <td>{post?.id}</td>
                  <td>{post?.title}</td>
                  <td>{post?.body}</td>
                  <td>
                    <Button variant="primary">Edit</Button>
                    <Button variant="secondary">delete</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table> */}
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
    },
    dispatch
  );
};

export const AppPage = connect(mapStateToProps, mapDispatchToProps)(App);
