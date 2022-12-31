import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavHambur from "./NavHambur";
import NavHash from "./NavHash";
import NavLi from "./NavLi";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="sticky top-0 bg-white z-10">
      <div className="mx-16 my-2.5 flex justify-between items-center tablet:mx-8 tablet:my-3 phone:mx-4">
        <NavLink to="/">
          <img
            src="./src/assets/img/brand-logo.jpg"
            alt="Bax logo"
            className="w-3/4 my-3"
          />
        </NavLink>

        <NavHambur clicked={clicked} handleClick={handleClick} />

        <div
          className={`tablet:fixed tablet:top-20 tablet:w-2/4 tablet:left-1/3 tablet:bg-color_default tablet:py-5 tablet:px-5 tablet:shadow-bax-shadow tablet:rounded-bax-radius duration-500 ${
            clicked ? "opacity-100 visible" : "tablet:opacity-0 tablet:invisible"
          }`}
        >
          <div className="tablet:flex tablet:flex-col tablet:justify-between tablet:items-center tablet:gap-8">
            <NavLi itemNav="Inicio" linkTo="/" />
            <NavLi itemNav="Cursos" linkTo="/courses" />
            <NavHash hashNav="#testimonials" hashName="Testimonios" />
            <NavHash hashNav="#about" hashName="Nosotros" />
            <NavLi itemNav="Contacto" linkTo="/contact" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
