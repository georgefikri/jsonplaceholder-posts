import { Button, Spinner, Table } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  deletePost,
  getPostById,
} from "../../redux/postsReducer/actionCreator";
import { Outlet, Link } from "react-router-dom";

function PostsList({ posts, postsFiltered, getPostById }) {
  const dispatch = useDispatch();

  const handleDelete = (id, postsFiltered) =>
    dispatch(deletePost(id, postsFiltered));

  return (
    <div>
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
                    <Link
                      className="btn btn-primary"
                      to="/details"
                      onClick={() => getPostById(post?.id)}
                    >
                      edit
                    </Link>
                    <Button
                      onClick={() => handleDelete(post?.id, posts)}
                      variant="secondary"
                    >
                      delete
                    </Button>
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
  postsFiltered: state?.posts?.filteredPosts,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deletePost,
      getPostById,
    },
    dispatch
  );
};

export const PostsListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
