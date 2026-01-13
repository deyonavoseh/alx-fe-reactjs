import { Link } from "react-router-dom";

const Posts = () => {
  const demoPosts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ];

  return (
    <div>
      <h2>Posts</h2>
      <p>Click a post to view a dynamic route: /posts/:postId</p>

      <ul>
        {demoPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
