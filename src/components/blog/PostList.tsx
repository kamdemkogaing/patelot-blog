const PostList = ({ blogs, title, ...rest }) => {
  // state

  //comportement

  // render
  return (
    <div className="bloglist text-white text-center" {...rest}>
      <div className="font-bold text-2xl underline decoration-4">{title}</div>
      <div className="grid md:grid-cols-2 md:gap-2 xl:grid-cols-4 xl:gap-4">
        {blogs.map((post) => {
          return (
            <div
              className="blog hover:shadow-xl hover:p-4 hover:bg-[olive] hover:rounded-xl text-left my-8 p-4"
              key={post.id}
            >
              <a
                href=""
                className="blog-title font-extrabold text-xl link link-hover"
              >
                {post.title}
              </a>
              <div className="blog-publication-date italic text-sm mt-12">
                {post.date}
              </div>
              <div className="blog-author italic">
                Veröffentlicht von : {post.author}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
