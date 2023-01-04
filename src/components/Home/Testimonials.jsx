import useObserver from "../../hooks/UseObserver";
import CardT from "../home/CardT";

const Testimonials = () => {
  const [refC, isVisible] = useObserver();
  if (refC.current !== null) {
    console.log(refC);
  }
  return (
    <section className="mt-28 mb-52">
      <div
        className="mx-16 flex flex-wrap items-center justify-center gap-4 tablet:mx-8 phone:mx-4"
        id="testimonials"
        ref={refC}
      >
        <h2 className="text-color_primary_2 after:bg-color_secondary_2 mb-14">
          Testimonios
        </h2>

        <div className="grid gap-16 grid-cols-3-auto justify-items-center items-stretch">
          <CardT
            img="./src/assets/img/testimony-1.png"
            paragraph="''El curso fue muy interesante, muy didáctico en cuanto a la metodología de trabajo y contenidos. (…) todas las dudas fueron perfectamente respondidas. Creo que todo lo aprendido tiene mucho valor para el desempeño de nuestro trabajo profesional cotidiano. Gracias por el compromiso y predisposición del docente para con el curso.''"
            name="Juliana, 24 años"
            lineSide={false}
          />
          <CardT
            img="./src/assets/img/testimony-2.png"
            paragraph="'El material entregado en el Curso de Marketing cubrió totalmente la necesidad, y el objetivo superó totalmente con lo propuesto. El curso esta relacionado con lo que realmente pasa en la empresa.'"
            name="Rosa, 37 años"
            lineSide={true}
          />
          <CardT
            img="./src/assets/img/testimony-3.png"
            paragraph="'Una vez iniciados mis estudios, descubrí el trato personalizado, profesional y la excelente calidad humana de todos sus profesores. Todos de una forma u otra, contribuyeron motivándome, inspirándome y retándome a dar lo mejor de mí.'"
            name="Carlos, 45 años"
            lineSide={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
