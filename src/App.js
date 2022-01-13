// land of the thousand imports
import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  postsUsers,
  getAllPosts,
  currentPageNumber,
  postsPerPages,
  getCertainPosts,
} from "./redux/postsReducer/actionCreator";
import { Button, Spinner, Table } from "react-bootstrap";
// land of the thousand imports

function App({ posts, postsPerPage, currentPage, postsFiltered }) {
  const dispatch = useDispatch();


  // console.log("postsPerPage, currentPage", postsPerPage, currentPage);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    if(currentPage) {
      console.log('goa el if')
      dispatch(getCertainPosts(currentPage, postsPerPage))
    }
    
  }, [posts])

  return (
    <div className="App">
      <Table striped bordered hover>
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
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state?.posts.allPosts,
  currentPage: state?.posts?.currentPage,
  postsPerPage: state?.posts?.postsPerPage,
  postsFiltered: state?.posts?.filteredPosts
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllPosts,
      currentPageNumber,
      postsPerPages,
      getCertainPosts,
    },
    dispatch
  );
};

export const AppPage = connect(mapStateToProps, mapDispatchToProps)(App);
