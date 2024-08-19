import { useParams } from "react-router-dom";

const BlogDetail = () => {
  // state
  const { id } = useParams();
  //comportements

  //render
  return <div>Kamdem Kogaing Patrick - {id}</div>;
};

export default BlogDetail;
