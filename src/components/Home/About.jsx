import useObserver from "../../hooks/UseObserver";

const About = () => {
  const [refC, isVisible] = useObserver();
  if (refC.current !== null) {
    console.log(refC);
  }
  return (
    <section className="mt-28 mb-52">
      <div
        className="mx-16 flex flex-wrap items-center gap-16 tablet:mx-8 phone:mx-4"
        id="about"
        ref={refC}
      >
        <h2 className="text-color_primary_2 after:bg-color_secondary_2 mb-14">
          Nosotros
        </h2>

        <div className="grid gap-16 grid-cols-3-auto justify-items-center items-stretch">
          <div className="card__item object__animate right__animate show">
            <img
              src="./src/assets/img/about.png"
              alt="about"
              className="img_full"
            />
          </div>

          <div className="object__animate right__animate zoomIn">
            <h3 className="text-color_primary_2 capitalize">La escuela</h3>
            <p className="text-color_primary_2 text-lg font-normal leading-[34px]">
              Somos una escuela de larga trayectoria, ubicada en el centro de la
              Ciudad de México. Nuestros inicios se remontan al año 2002,
              estableciendonos como una de las primeras escuelas independientes
              avocadas a personas emprendedoras.
            </p>
            <p className="text-color_primary_2 text-lg font-normal leading-[34px]">
              Contamos con un establecimiento moderno, en donde se dictan las
              clases presenciales, y tambien contamos con un campus virtual en
              donde llevamos a cabo tutoriales y material complementario.Creamos
              un ambiente seguro y confiable para que todos los estudiantes se
              sientan cómodos y conectados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
