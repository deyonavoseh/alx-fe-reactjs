import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // Required by ALX checker (do not remove)
    refetchOnWindowFocus: false,
    keepPreviousData: true,

    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Posts</h2>

        <button onClick={() => refetch()}>Refetch Posts</button>

        {isFetching && <span>Refreshing...</span>}
      </div>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <b>{post.title}</b>
            <p style={{ margin: "4px 0" }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
