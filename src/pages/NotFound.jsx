export const NotFound = () => {
  return (
    <section className="mt-28 mb-52">
      <div className="mx-16 flex flex-col justify-center items-center tablet:mx-8 phone:mx-4">
        <h1 className="mb-14 text-[3.125rem] font-extrabold leading-[3.75rem] text-color_primary_2 tablet:text-center phone:text-[2.5rem]">Disculpa no encontramos la página</h1>
        <img
          src="./src/assets/img/no-found.png"
          alt="enterprising couple in cafeteria"
        />
        <div className="flex flex-col items-center gap-3">
          <p className="p__roboto">Regresar a</p>{" "}
          <a href="/" className="button-cta">
            Inicio
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
