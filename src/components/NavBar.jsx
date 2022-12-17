import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">
          <img src="./src/assets/img/brand-logo.jpg" alt="Bax logo" />
        </NavLink>
      </div>
      <div className="nav__responsive">
        <div className="nav__item">
          <NavLink to="/" className="item home item__phone active__page">
            Inicio
          </NavLink>
          <NavLink to="/courses" className="item item__phone">
            Cursos
          </NavLink>
          <a href="/#testimonials" className="item hash item__phone">
            Testimonios
          </a>
          <NavLink to="/#about" className="item hash item__phone">
            Nosotros
          </NavLink>
          <NavLink to="/contact" className="item item__phone">
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
