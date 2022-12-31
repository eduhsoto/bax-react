import MsgForm from "./msgForm";

const SucessF = () => {
  return (
    <MsgForm
      title="¡Tu mensaje fue enviado con éxito!"
      result="Pronto nos pondremos en contacto contigo"
      paragraph=" Para no perderte ninguna noticia, puedes seguirnos en nuestras redes
    sociales"
      error={false}
    />
  );
};

export default SucessF;
