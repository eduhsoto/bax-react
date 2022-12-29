const NavHambur = ({ clicked, handleClick }) => {
  const label =
    "tablet:w-10 tablet:h-1 tablet:rounded-md tablet:bg-color_secondary_2 tablet:absolute duration-500";
  return (
    <div
      className="tablet:h-8 tablet:w-10 tablet:relative tablet:cursor-pointer"
      onClick={handleClick}
    >
      <span
        className={`${label} tablet:top-0 ${
          clicked ? "rotate-45 origin-[5%]" : ""
        }`}
      ></span>
      <span
        className={`${label} tablet:top-3.5 ${
          clicked ? "translate-x-5 tablet:opacity-0" : ""
        }`}
      ></span>
      <span
        className={`${label} tablet:top-3.5 ${
          clicked ? "translate-x-[-1.25rem] tablet:opacity-0" : ""
        }`}
      ></span>
      <span
        className={`${label} tablet:bottom-0 ${
          clicked ? "rotate-[-45deg] origin-[5%]" : ""
        }  `}
      ></span>
    </div>
  );
};

export default NavHambur;
