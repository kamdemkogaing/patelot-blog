import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Page from "../../assets/helpers/Page";
import useDataBlogList from "../../hooks/useDataBlogList";
import IsLoading from "../is-loading/IsLoading";

const BlogDetail = () => {
  const history = useNavigate();

  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useDataBlogList("http://localhost:8000/blogs/" + id);

  /* const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, { method: "DELETE" }).then(
      () => {
        history("/blog");
        console.log("Der Blogartikel wurde erfolgreich entfernt!");
      }
    );
  }; */

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
            {/* <button
              onClick={handleDelete}
              className="btn btn-square btn-outline bg-white hover:bg-black mt-4 text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
          </div>
        )}
      </div>
    </Page>
  );
};

export default BlogDetail;
