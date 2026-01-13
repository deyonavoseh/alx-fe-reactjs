import { useParams, Link } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post Details</h2>
      <p>
        Dynamic route parameter: <b>{postId}</b>
      </p>

      <Link to="/posts">Back to Posts</Link>
    </div>
  );
};

export default PostDetails;
