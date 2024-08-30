import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, ...rest }) => {
  // state

  //comportement

  // render
  return (
    <div className="bloglist text-white" {...rest}>
      <div className="flex flex-row justify-between items-center">
        <kbd className="kbd bg-[olive] uppercase font-bold text-xl">
          {title}:
        </kbd>
        <Link to="/createblog" className="underline underline-offset-8">
          Ein Blog erstellen
        </Link>
      </div>
      <div className="grid md:grid-cols-2 md:gap-2 xl:grid-cols-4 xl:gap-4">
        {blogs.map((blog) => {
          return (
            <div
              className="blog hover:shadow-xl hover:p-4 hover:bg-[olive] hover:rounded-xl text-left my-8 p-4"
              key={blog.id}
            >
              <Link
                to={`/blogs/${blog.id}`}
                className="blog-title font-extrabold text-xl link link-hover"
              >
                {blog.title}
              </Link>
              <div className="blog-publication-date italic text-sm mt-12">
                {blog.date}
              </div>
              <div className="blog-author italic">
                Veröffentlicht von : {blog.author}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
