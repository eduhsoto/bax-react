import { HashLink } from "react-router-hash-link";

const NavHash = ({ hashNav, hashName }) => {
  return (
    <HashLink
      smooth
      to={"/" + hashNav}
      className="mx-5 my-0 text-lg font-extrabold leading-7 text-menu_item_default relative after:absolute after:w-0 after:h-0.5 after:left-1/2 after:top-full after:bg-color_secondary_1 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:text-color_secondary_1"
      scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
    >
      {hashName}
    </HashLink>
  );
};

export default NavHash;
