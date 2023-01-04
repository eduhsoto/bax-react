import { HashLink } from "react-router-hash-link";

const NavHFooter = ({ hashNav, hashName }) => {
  return (
    <HashLink
      smooth
      to={"/" + hashNav}
      className="font-roboto text-base leading-[19px] font-normal text-color_default"
      scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
    >
      {hashName}
    </HashLink>
  );
};

export default NavHFooter;
