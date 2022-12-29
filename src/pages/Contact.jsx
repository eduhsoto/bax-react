import SendMail from "../components/contact/SendMail";

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
            <SendMail />
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