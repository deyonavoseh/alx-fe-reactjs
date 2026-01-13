import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Dynamic blog post ID: {id}</p>
    </div>
  );
};

export default BlogPost;
