import { NavLink } from "react-router-dom";

const NavLi = ({ itemNav, linkTo }) => {
  let activeClass = {
    backgroundColor: "#F4CF2F",
    padding: "10px 15px",
    borderRadius: "20px 20px 20px 20px",
    color: "#002360",
  };
  return (
    <NavLink
      to={linkTo}
      className="mx-5 my-0 text-lg font-extrabold leading-7 text-menu_item_default relative after:absolute after:w-0 after:h-0.5 after:left-1/2 after:top-full after:bg-color_secondary_1 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:text-color_secondary_1"
      style={({ isActive }) => (isActive ? activeClass : null)}
    >
      {itemNav}
    </NavLink>
  );
};

export default NavLi;
