const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="left object__animate right__animate show">
            <img
              src="./src/assets/img/couple-entrepreneurs.png"
              alt="couple entrepreneurs"
              className="img_full"
            />
          </div>

          <div className="form object__animate left__animate show">
            <form
              action=""
              id="form__contact"
              className="flex__column form__contact"
            >
              <div className="flex__column group__date-form">
                <label htmlFor="fullname" className="p__color p__roboto p__label">
                  Nombre y apellido:
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Escribe tu nombre completo"
                />
                <p className="validate__name p__robot">
                  El nombre solo debe contener letras
                </p>
              </div>
              <div className="flex__column group__date-form">
                <label htmlFor="email" className="p__color p__roboto p__label">
                  E-mail:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="alguien@nombre.dominio"
                />
                <p className="validate__correo p__robot">
                  Ingrese un correo válido
                </p>
              </div>
              <div className="flex__column group__date-form">
                <label htmlFor="message" className="p__color p__roboto p__label">
                  Tu mensaje:
                </label>
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Escribe tu mensaje"
                />
                <p className="validate__message p__robot">
                  Solo ingrese el mensaje que deba ingresar, no es necesario
                  agregar números o caracteres especiales
                </p>
              </div>
              <div className="error">
                <p className="p__error p__roboto error__text"></p>
                <ul className=" p__roboto list__error"></ul>
              </div>
              <div className="error__net">
                <p className="p__error p__roboto">
                  Fallo al enviar tus datos, revisa tu conexión a internet y
                  vuelve a intentar.
                </p>
                <p className="p__error p__roboto">
                  Recarge esta pagina una vez conectado a la red.
                </p>
              </div>
              <button type="submit" className="submit button__cta">
                Enviar
              </button>
            </form>
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
                Para no perderte ninguna noticia, puedes seguirnos en nuestras
                redes sociales
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
          </div>
        </div>
        <img
          src="./src/assets/img/curveLU.svg"
          alt="curve left up"
          className="curves"
        />
      </section>
      <section>
        <div className="container flex__column">
          <h1 className="text__principal">Otros canales de comunicación</h1>
          <div className="channels card___grid">
            <div className="channel__type card__item">
              <img src="./src/assets/img/channel-phone.png" alt="channel phone" />
              <p className="p__color p__roboto p__contact">(+52) 22-2365- 8547</p>
            </div>
            <div className="channel__type card__item">
              <img src="./src/assets/img/channel-email.png" alt="channel email" />
              <p className="p__color p__roboto">E-mail:</p>
              <p className="p__color p__roboto p__contact">
                baxsoluciones@escueladenegocio.com.mx
              </p>
            </div>
            <div className="channel__type card__item">
              <img src="./src/assets/img/channel-place.png" alt="channel place" />
              <p className="p__color p__roboto p__contact">
                Av. Tulugar Gander 152, CDMX.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;