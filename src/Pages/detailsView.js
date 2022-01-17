import SinglePostDetails from "../components/postDetails";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function DetailsView({ singlePost, posts }) {
  return (
    <div>
      <SinglePostDetails singlePost={singlePost} />
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
