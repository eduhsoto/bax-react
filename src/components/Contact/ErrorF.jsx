import MsgForm from "./msgForm";

const ErrorF = () => {
  return (
    <MsgForm
      title="¡Tu mensaje no pudo enviarse, intentelo más tarde!"
      result="Revise su conexión a internet y recarge esta página una vez verificado su conexión, si el error persiste contáctenos"
      paragraph="Puedes hacerlo por aquí, visita nuestras redes sociales."
      error={true}
    />
  );
};

export default ErrorF;
