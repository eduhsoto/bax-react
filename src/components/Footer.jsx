import { NavLink } from "react-router-dom";
import NavHash from "./navbar/NavHash";

const Footer = () => {
  return (
    <footer className="bg-color_tertiary mt-36 py-8">
      <div className="mx-16 grid grid-cols-3-auto gap-16 justify-items-center items-center pb-5 border-b-2 border-color_secondary_2 tablet:mx-8 phone:mx-4">
        <div className="flex flex-col gap-4 phone:items-center">
          <NavLink
            to="/courses"
            className="font-roboto text-base leading-[19px] font-normal text-color_default"
          >
            Cursos
          </NavLink>
          <NavHash
            hashNav="#testimonials"
            hashName="Testimonios"
            classHash={false}
          />
          <NavHash hashNav="#about" hashName="Nosotros" classHash={false} />
          <NavLink
            to="/contact"
            className="font-roboto text-base leading-[19px] font-normal text-color_default"
          >
            Contacto
          </NavLink>
        </div>

        <img
          src="./src/assets/img/brand-logo-footer.png"
          alt="brand logo footer"
          className="w-[40%]"
        />

        <div className="flex gap-4">
          <a href="">
            <img
              src="./src/assets/img/facebook-icon.png"
              alt="facebook icon"
              className="w-10"
            />
          </a>
          <a href="">
            <img
              src="./src/assets/img/instagram-icon.png"
              alt="instagram icon"
              className="w-10"
            />
          </a>
          <a href="">
            <img
              src="../src/assets/img/linkedin-icon.png"
              alt="linkedin icon"
              className="w-10"
            />
          </a>
          <a href="">
            <img
              src="./src/assets/img/email-icon.png"
              alt="email icon"
              className="w-10"
            />
          </a>
          <a href="">
            <img
              src="./src/assets/img/twitter-icon.png"
              alt="twitter icon"
              className="w-10"
            />
          </a>
        </div>
      </div>
      <p className="mx-[60px] my-5 font-roboto text-base font-normal leading-[19px] text-color_default">
        Copyright Inc. Bax. © 2022. Design by{" "}
        <a
          href="https://www.linkedin.com/in/debora-migliani/"
          className="font-roboto text-base font-normal leading-[19px] text-color_default"
        >
          Debora Migliani Diseñadora UX/UI
        </a>
      </p>
    </footer>
  );
};

export default Footer;
