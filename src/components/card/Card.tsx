import { Link } from "react-router-dom";

const Card = ({
  image,
  title,
  isExternLink = false,
  linkText,
  buttonText,
  children,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="scale-75 md:scale-75 lg:scale-100 xl:scale-100"
          src={image}
          alt="card-img"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">{title}</h2>
        <p>{children}</p>
        <div className="card-actions justify-end">
          <button className="rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:bg-black">
            {isExternLink ? (
              <a href={`${linkText}`} target="_blank">
                {buttonText}
              </a>
            ) : (
              <Link to={`/${linkText}`}>{buttonText}</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
