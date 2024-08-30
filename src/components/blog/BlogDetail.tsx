import { useParams } from "react-router";
import useDataBlogList from "../../hooks/useDataBlogList";
import IsLoading from "../is-loading/IsLoading";

const BlogDetail = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useDataBlogList("http://localhost:8000/blogs/" + id);

  return (
    <div className="container mx-auto">
      <div>page ID - {id}</div>
      {isLoading && <IsLoading />}
      {error && <div>{error}</div>}
      {blog && (
        <div>
          <h2 className="blog-title">{blog.title}</h2>
          <small className="blog-publication-date">
            Veröffentlicht von : {blog.date}
          </small>
          <p className="blog-body">{blog.body}</p>
          <p className="blog-author">Veröffentlicht von: {blog.author}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
