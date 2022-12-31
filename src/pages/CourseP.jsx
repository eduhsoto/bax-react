import Course from "../components/course/Course";
import Qa from "../components/Qa";

const CourseP = () => {
  return (
    <>
      <section className="mt-28 mb-52">
        <Course
          img="./src/assets/img/management-course-2.png"
          alt="management course image"
          title="Administración"
          p1="Estos profesionales pueden encargarse de temas tan diversos como las finanzas, la tesorería y la contabilidad. Además, pueden controlar funciones de RRHH y marketing."
          p2="Las salidas laborales pasan por puestos ejecutivos, de consultores, asesores o investigadores empresariales."
          time="Duración del curso: 1 año."
          subjects="Cantidad de materias: 16"
        />
      </section>
      <section className="mt-28 mb-52">
        <div className="mx-16 tablet:mx-8 phone:mx-4 flex justify-center items-center flex-wrap gap-16">
          <div className="left__course flex__column form__contact">
            <h3 className="title__course margin__bottom-none">Contabilidad</h3>
            <p className="p__color p__roboto">
              Cuando termines de estudiar la carrera de contabilidad, podrás
              desempeñarte en los siguientes puestos de trabajo: Administrativo
              contable, Auditor en estudios contables, Consultor independiente,
              Gerente de finanzas, Perito contable, entre otros.
            </p>
            <p className="p__color p__roboto">
              Duración del curso: 1 año. <br /> Cantidad de materias: 14
            </p>
          </div>
          <div className="right">
            <img
              src="./src/assets/img/accounting-course-2.png"
              alt="accounting course image"
              className="img_full"
            />
          </div>
        </div>
      </section>
      <section className="mt-28 mb-52">
        <Course
          img="./src/assets/img/marketing-course-2.png"
          alt="marketing course image"
          title="Marketing"
          p1="En esta área se encargan de la propuesta de estrategia de publicidad, aplicada en función a las características de la empresa."
          p2="Esta carrera tiene una gran salida laboral, principalmente en tres áreas: el departamento de marketing de una empresa; una agencia de marketing para otras empresas; ser freelancer."
          time="Duración del curso: 1 año."
          subjects="Cantidad de materias: 16"
        />
      </section>
      <section className="mt-28 mb-52">
        <div className="mx-16 flex justify-center tablet:mx-8 phone:mr-8">
          <Qa
            q1="¿Cómo puedo inscribirme a un curso?"
            q2="¿Existen promociones para cursar los tres cursos disponibles?"
            q3="¿Tienen otro canal de contacto ademas de éste?"
          />
        </div>
      </section>
      <div className="mx-16 tablet:mx-8 phone:mx-4 flex justify-center">
        <a href="/contact" className="button-cta">
          Contactar
        </a>
      </div>
    </>
  );
};

export default CourseP;
