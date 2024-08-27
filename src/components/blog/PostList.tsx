const PostList = ({ blogs, title, onClick, ...rest }) => {
  // state

  //comportement

  // render
  return (
    <div className="bloglist text-white text-center" {...rest}>
      <div className="font-bold text-2xl">{title}</div>
      {blogs.map((post) => {
        return (
          <div
            className="blog my-8 hover:shadow-xl hover:p-4 hover:bg-[olive] hover:rounded-xl text-left p-4"
            key={post.id}
          >
            <a
              href=""
              className="blog-title font-extrabold text-xl link link-hover"
            >
              {post.title}
            </a>
            <div className="mt-8">
              <p className="blog-publication-date italic text-sm">
                {post.date}
              </p>
              <p className="blog-author italic font-extrabold">
                Publié par : {post.author}
              </p>
            </div>

            <button
              className="btn btn-square btn-outline mt-4 bg-white hover:bg-slate-500"
              onClick={() => onClick(post.id)}
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
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
