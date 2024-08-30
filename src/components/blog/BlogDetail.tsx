import { useParams } from "react-router";
import Page from "../../assets/helpers/Page";
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
    <Page>
      <div className="container mx-auto">
        {isLoading && <IsLoading />}
        {error && <div>{error}</div>}
        {blog && (
          <div className="flex flex-col p-6 shadow-2xl my-8 rounded-2xl bg-gradient-to-r from-[#f4f4f4]">
            <div className="blog-title text-[olive] font-bold">
              {blog.title}
            </div>
            <small className="blog-publication-date mb-8">
              <span className="font-bold">Veröffentlicht am:</span> {blog.date}
            </small>
            <p className="blog-body leading-loose text-justify">{blog.body}</p>
            <div className="blog-author mt-4">
              <small className="blog-publication-date overline italic mb-8">
                <span className="font-bold">Veröffentlicht von:</span>{" "}
                {blog.author}
              </small>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};

export default BlogDetail;
