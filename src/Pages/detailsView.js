import SinglePostDetails from "../components/postDetails";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

function DetailsView({ singlePost, posts }) {
  return (
    <div>
      <SinglePostDetails singlePost={singlePost} />

      {console.log("singlePost", singlePost)}
      {console.log("singlePost id", singlePost?.userId)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state?.posts.allPosts,
  singlePost: state?.posts?.singlePost,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export const DetailsViewPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsView);
