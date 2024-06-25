import classNames from "classnames";

type PropsInfos = {
  namePatelot: string;
  rolePaletot: string;
};

const PatelotHeader = ({ namePatelot, rolePaletot, ...props }: PropsInfos) => {
  //state

  //comportements

  // render
  return (
    <div className={classNames("bg-[olive]")} {...props}>
      <header
        className={classNames(
          "container mx-auto text-white text-center py-4 px-16"
        )}
      >
        <h1 className={classNames("text-4xl font-bold my-3")}>{namePatelot}</h1>
        <p className={classNames("text-xl")}>{rolePaletot}</p>
      </header>
    </div>
  );
};

export default PatelotHeader;
