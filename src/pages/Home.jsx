import CardF from "../components/Home/CardF";
import { CardT } from "../components/Home/CardT";
import Course from "../components/Home/Course";
import TitleH2 from "../components/Home/TitleH2";

const Home = () => {
  return (
    <>
      <section>
        <div className="container head">
          <div className="right object__animate right__animate show">
            <h1 className="text__principal">
              Capacitamos personas para que cumplan su sueño emprendedor
            </h1>
            <p className="p__header">
              Te acompañamos en tu camino con profesionales experimentados y las
              mejores herramientas.
            </p>
            <a href="/courses" className="button__cta button__desktop">
              Conoce nuestros cursos
            </a>
          </div>

          <div className="left object__animate left__animate show">
            <img
              src="./src/assets/img/enterprising-couple-in-cafeteria.png"
              alt="enterprising couple in cafeteria"
              className="img_full"
            />
          </div>

          <div className="button__phone">
            <a href="/courses" className="button__cta">
              Conoce nuestros cursos
            </a>
          </div>
        </div>
        <img
          src="./src/assets/img/curveRU.svg"
          alt="curve right up"
          className="curves"
        />
      </section>
      <section>
        <div className="container">
          <CardF
            title="Misión"
            img="./src/assets/img/mission-image.jpg"
            alt="mision woman on computer"
            paragraph="Nos enfocadamos en la educación de alto nivel para los pequeños y medianos emprendedores en México."
          />
          <CardF
            title="Visión"
            img="./src/assets/img/vision-image.jpg"
            alt="owner local clothing"
            paragraph="Aportar valor a la mayor cantidad posible de pequeños emprendedores."
          />
          <CardF
            title="Valores"
            img="./src/assets/img/values-image.jpg"
            alt="team meeting"
            paragraph="Creemos en el potencial de cada persona, en la superación personal y la determinación."
          />
        </div>
      </section>
      <section className="section__courses">
        <div className="container flex__column flex__course-column">
          <TitleH2 title="Nuestros cursos" />
          <p className="p__title p__color">
            Nuestra oferta académica te permitirá desempeñarte en las áreas de:
          </p>

          <div className="grid__courses">
            <Course
              title="Administración"
              img="./src/assets/img/management-course.png"
              alt="management course image"
              paragraph="Suma conocimientos de gestión y administración altamente útiles y requeridos en toda empresa."
            />
            <Course
              title="Contabilidad"
              img="./src/assets/img/accounting-course.png"
              alt="accounting course image"
              paragraph="Aprende la mejor manera de atender las cuentas de tu negocio o de la empresa que vayas a trabajar."
            />
            <Course
              title="Marketing"
              img="./src/assets/img/marketing-course.png"
              alt="marketing course image"
              paragraph="Gestiona, planifica y crea las mejores y mas nuevas estrategias de publicidad y promoción para tu emprendimiento o para clientes."
            />
          </div>
        </div>
        <img
          src="./src/assets/img/curveRD.svg"
          alt="curve right down"
          className="curves"
        />{" "}
      </section>
      <section>
        <div className="container">
          <p className="graduate">
            De 1,038 egresados de la carrera de Administración, 919 se
            encuentran trabajando.
          </p>
          <div className="card___grid">
            <div className="card__item">
              <img
                src="./src/assets/img/student-boy-on-notebook.png"
                alt="student boy on notebook"
                className="img_full"
              />
              <p className="p__graduate p__roboto">
                ¿Sabías que tener conocimientos de Administración te permite
                contar con herramientas para gestionar de manera eficiente tu
                negocio?
              </p>
            </div>

            <div className="card__item">
              <img
                src="./src/assets/img/img-porcentage.png"
                alt="porcentage imgage"
                className="img_full"
              />
            </div>

            <div className="card__item">
              <img
                src="./src/assets/img/laughing-girl.png"
                alt="laughing girl"
                className="img_full"
              />
              <p className="p__graduate p__roboto">¿Quieres ser Contador/a?</p>
              <p className="p__graduate p__roboto">
                Contaduría está entre las carreras con menor porcentaje de
                informalidad y de desempleo en México.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./src/assets/img/curveLU.svg"
          alt="curve left up"
          className="curves"
        />{" "}
      </section>
      <section>
        <div className="container" id="testimonials">
          <TitleH2 title="Testimonios" />

          <div className="card___grid object__animate right__animate show">
            <CardT
              img="./src/assets/img/testimony-1.png"
              paragraph="'El curso fue muy interesante, muy didáctico en cuanto a la metodología de trabajo y contenidos. (…) todas las dudas fueron perfectamente respondidas. Creo que todo lo aprendido tiene mucho valor para el desempeño de nuestro trabajo profesional cotidiano. Gracias por el compromiso y predisposición del docente para con el curso.'"
              name="Juliana, 24 años"
            />
            <CardT
              img="./src/assets/img/testimony-2.png"
              paragraph="'El material entregado en el Curso de Marketing cubrió totalmente la necesidad, y el objetivo superó totalmente con lo propuesto. El curso esta relacionado con lo que realmente pasa en la empresa.'"
              name="Rosa, 37 años"
            />
            <CardT
              img="./src/assets/img/testimony-3.png"
              paragraph="'Una vez iniciados mis estudios, descubrí el trato personalizado, profesional y la excelente calidad humana de todos sus profesores. Todos de una forma u otra, contribuyeron motivándome, inspirándome y retándome a dar lo mejor de mí.'"
              name="Carlos, 45 años"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container cta">
          <h2 className="text__principal right">
            Aprende las mejores herramientas para hacer crecer tu negocio.
          </h2>

          <a href="" className="button__cta">
            Consulta Inscriciones
          </a>
        </div>
        <img
          src="./src/assets/img/curveLD.svg"
          alt="curve left down"
          className="curves curve__cta"
        />
      </section>
      <section>
        <div className="container flex__start" id="about">
          <TitleH2 title="Nosotros" />

          <div className="card___grid">
            <div className="card__item object__animate right__animate show">
              <img
                src="./src/assets/img/about.png"
                alt="about"
                className="img_full"
              />
            </div>

            <div className="object__animate right__animate zoomIn">
              <h3 className="title__course title__capitalize">La escuela</h3>
              <p className="p__roboto p__color">
                Somos una escuela de larga trayectoria, ubicada en el centro de
                la Ciudad de México. Nuestros inicios se remontan al año 2002,
                estableciendonos como una de las primeras escuelas
                independientes avocadas a personas emprendedoras.
              </p>
              <p className="p__roboto p__color">
                Contamos con un establecimiento moderno, en donde se dictan las
                clases presenciales, y tambien contamos con un campus virtual en
                donde llevamos a cabo tutoriales y material
                complementario.Creamos un ambiente seguro y confiable para que
                todos los estudiantes se sientan cómodos y conectados.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container card___grid">
          <div>
            <h3 className="title__course title__capitalize">Staff</h3>
            <p className="p__color p__roboto">
              Contamos con un plantel de profesionales experimentados en las
              áreas dictadas. Cada miembro se desempeña en guiar, brindar los
              conocimiemtos y acompañar a cada estudiante en su proceso de
              aprendizaje.
            </p>
          </div>

          <div className="card__item flex__row">
            <img
              src="./src/assets/img/staff-member-1.png"
              alt="staff member 1"
            />
            <img
              src="./src/assets/img/staff-member-2.png"
              alt="staff member 2"
            />
            <img
              src="./src/assets/img/staff-member-3.png"
              alt="staff member 3"
            />
          </div>

          <div className="card__item">
            <img src="./src/assets/img/ceo-director.png" alt="ceo director" />
            <p className="p__title">Carlos Carrera</p>
            <p className="p__color p__roboto">CEO/Director BAX Soluciones</p>
          </div>
        </div>
        <img
          src="./src/assets/img/curveLU.svg"
          alt="curve left up"
          className="curves curve__staff"
        />
      </section>
      <section>
        <div className="container">
          <div className="flex__column">
            <h2 className="text__principal center__text">
              Si quieres potenciarte y capacitarte, este es tu lugar.
            </h2>
            <a href="/contact" className="button__cta">
              Quiero inscribirme
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="qa__content">
            <p className="text__principal qa__text">Preguntas frecuentes</p>

            <ol>
              <div className="flex__horizontal">
                <li className="p__graduate p__roboto">
                  ¿Entregan certificaciones?
                </li>
                <img
                  src="./src/assets/img/keyboard_arrow_down.svg"
                  alt="arrow down"
                  className="arrow__down"
                />
              </div>
              <div className="flex__horizontal">
                <li className="p__graduate p__roboto">¿Como puedo inscribirme?</li>
                <img
                  src="./src/assets/img/keyboard_arrow_down.svg"
                  alt="arrow down"
                  className="arrow__down"
                />
              </div>
              <div className="flex__horizontal">
                <li className="p__graduate p__roboto">
                  ¿Necesito conocimientos previos para cursar
                </li>
                <img
                  src="./src/assets/img/keyboard_arrow_down.svg"
                  alt="arrow down"
                  className="arrow__down"
                />
              </div>
            </ol>
          </div>
        </div>
        <img
          src="./src/assets/img/curveRD.svg"
          alt="curve right down"
          className="curves curve__staff"
        />
      </section>
      <div className="container flex__content__center">
        <TitleH2 title="Tu futuro es hoy" />
      </div>
    </>
  );
};

export default Home;
