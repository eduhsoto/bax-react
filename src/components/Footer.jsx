const Footer = () => {
  return (
    <footer className="footer__color">
      <div className="container card___grid grid__footer">
        <div className="flex__column flex__course-column">
          <a href="/courses" className="item__footer p__small__roboto">
            Cursos
          </a>
          <a href="/#testimonials" className="item__footer p__small__roboto">
            Testimonios
          </a>
          <a href="/#about" className="item__footer p__small__roboto">
            Nosotros
          </a>
          <a href="/contact" className="item__footer p__small__roboto">
            Contacto
          </a>
        </div>

        <img
          src="./src/assets/img/brand-logo-footer.png"
          alt="brand logo footer"
          className="brand__logo__footer"
        />

        <div className="social__footer">
          <a href="">
            <img
              src="./src/assets/img/facebook-icon.png"
              alt="facebook icon"
              className="social__icon"
            />
          </a>
          <a href="">
            <img
              src="./src/assets/img/instagram-icon.png"
              alt="instagram icon"
              className="social__icon"
            />
          </a>
          <a href="">
            <img
              src="../src/assets/img/linkedin-icon.png"
              alt="linkedin icon"
              className="social__icon"
            />
          </a>
          <a href="">
            <img
              src="./src/assets/img/email-icon.png"
              alt="email icon"
              className="social__icon"
            />
          </a>
          <a href="">
            <img
              src="./src/assets/img/twitter-icon.png"
              alt="twitter icon"
              className="social__icon"
            />
          </a>
        </div>
      </div>
      <p className="p__copyright p__small__roboto">
        Copyright Inc. Bax. © 2022. Design by{" "}
        <a
          href="https://www.linkedin.com/in/debora-migliani/"
          className="p__small__roboto"
        >
          Debora Migliani Diseñadora UX/UI
        </a>
      </p>
    </footer>
  );
};

export default Footer;
