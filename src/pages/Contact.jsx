import SendMail from "../components/contact/SendMail";
import Seo from "../seo/Seo";
import { lazy, Suspense } from "react";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contáctanos"
        description="Contacto a través del formulario, pronto te contactaremos."
        keywords="Bax, Bax soluciones, contact, contacto, form, formulario de contacto"
      />
      <section className="mt-28 mb-52 relative">
        <div className="mx-16 tablet:mx-8 phone:mx-4 flex justify-center items-center flex-wrap gap-16">
          <div className="max-w-[550px]">
            <img
              src="./src/assets/img/couple-entrepreneurs.png"
              alt="couple entrepreneurs"
              className="img_full"
            />
          </div>

          <div className="w-[450px]">
            {/* <Suspense fallback={<h3>loading</h3>}> */}
              <SendMail />
            {/* </Suspense> */}
          </div>
        </div>
        <img
          src="./src/assets/img/curveLU.svg"
          alt="curve left up"
          className="absolute top-2/4 -z-10 tablet:hidden"
        />
      </section>
      <section className="mt-28 mb-52">
        <div className="mx-16 flex content-center items-center flex-col justify-center gap-16 tablet:mx-8 phone:mx-4">
          <h1 className="mb-14 text-[3.125rem] font-extrabold leading-[3.75rem] text-color_primary_2 tablet:text-center phone:text-[2.5rem]">
            Otros canales de comunicación
          </h1>
          <div className="w-full grid gap-16 grid-cols-3-auto justify-items-center items-stretch">
            <div className="flex items-center flex-col">
              <img
                src="./src/assets/img/channel-phone.png"
                alt="channel phone"
              />
              <p className="text-color_primary_2 text-lg leading-[34px] tablet:text-center tablet:break-all">
                (+52) 22-2365- 8547
              </p>
            </div>
            <div className="flex items-center flex-col">
              <img
                src="./src/assets/img/channel-email.png"
                alt="channel email"
              />
              <p className="text-color_primary_2 text-lg leading-[34px]">
                E-mail:
              </p>
              <p className="text-color_primary_2 text-lg leading-[34px] tablet:text-center tablet:break-all">
                baxsoluciones@escueladenegocio.com.mx
              </p>
            </div>
            <div className="flex items-center flex-col">
              <img
                src="./src/assets/img/channel-place.png"
                alt="channel place"
              />
              <p className="text-color_primary_2 text-lg leading-[34px] tablet:text-center tablet:break-all">
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
