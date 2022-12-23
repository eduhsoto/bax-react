const SucessF = () => {
  return (
    <div className="succesful flex__column">
      <div>
        <p className="p__roboto center__text bold">
          ¡Tu mensaje fue enviado con éxito!
        </p>
        <p className="p__roboto center__text bold">
          Pronto nos pondremos en contacto contigo
        </p>
      </div>
      <p className="p__roboto center__text">
        Para no perderte ninguna noticia, puedes seguirnos en nuestras redes
        sociales
      </p>
      <div className="network__social">
        <img
          src="./src/assets/img/succ_facebook-icon.png"
          alt="facebook icon"
          className="social"
        />
        <img
          src="./src/assets/img/succ_linkedin-icon.png"
          alt="linkedin icon"
          className="social"
        />
        <img
          src="./src/assets/img/succ_twitter-icon.png"
          alt="twitter icon"
          className="social"
        />
      </div>
    </div>
  );
};

export default SucessF;
