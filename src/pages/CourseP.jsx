import Course from "../components/course/Course";
import Qa from "../components/Qa";
import Seo from "../seo/Seo";

const CourseP = () => {
  return (
    <>
     <Seo
        title="Conoce nuestros cursos"
        description="Conoce nuestros cursos para emprendedores"
        keywords="Bax, Bax soluciones, cursos, cursos para emprendedores"
      />
      <section className="mt-28 mb-52 relative">
        <Course
          img="./src/assets/img/management-course-2.png"
          alt="management course image"
          title="Administración"
          p1="Estos profesionales pueden encargarse de temas tan diversos como las finanzas, la tesorería y la contabilidad. Además, pueden controlar funciones de RRHH y marketing."
          p2="Las salidas laborales pasan por puestos ejecutivos, de consultores, asesores o investigadores empresariales."
          time="Duración del curso: 1 año."
          subjects="Cantidad de materias: 16"
        />
        <img
          src="./src/assets/img/curveRU.svg"
          alt="curve right up"
          className="absolute top-[45%] -z-10 tablet:hidden"
        />
      </section>
      <section className="mt-28 mb-52">
        <div className="mx-16 tablet:mx-8 phone:mx-4 flex justify-center items-center flex-wrap gap-16">
          <div className="flex flex-col items-stretch gap-6 max-w-[480px]">
            <h3 className="mb-0 uppercase text-color_primary_2">
              Contabilidad
            </h3>
            <p className="text-color_primary_2 text-lg font-normal leading-[34px]">
              Cuando termines de estudiar la carrera de contabilidad, podrás
              desempeñarte en los siguientes puestos de trabajo: Administrativo
              contable, Auditor en estudios contables, Consultor independiente,
              Gerente de finanzas, Perito contable, entre otros.
            </p>
            <p className="text-color_primary_2 text-lg font-normal leading-[34px]">
              Duración del curso: 1 año. <br /> Cantidad de materias: 14
            </p>
          </div>
          <div className="max-w-[600px]">
            <img
              src="./src/assets/img/accounting-course-2.png"
              alt="accounting course image"
              className="img_full"
            />
          </div>
        </div>
      </section>
      <section className="mt-28 mb-52 relative">
        <Course
          img="./src/assets/img/marketing-course-2.png"
          alt="marketing course image"
          title="Marketing"
          p1="En esta área se encargan de la propuesta de estrategia de publicidad, aplicada en función a las características de la empresa."
          p2="Esta carrera tiene una gran salida laboral, principalmente en tres áreas: el departamento de marketing de una empresa; una agencia de marketing para otras empresas; ser freelancer."
          time="Duración del curso: 1 año."
          subjects="Cantidad de materias: 16"
        />
        <img
          src="./src/assets/img/curveLD.svg"
          alt="curve left down"
          className="absolute -top-1/2 -z-10 tablet:hidden"
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
