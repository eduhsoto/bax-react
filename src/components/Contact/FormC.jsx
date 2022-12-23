import { useForm } from "react-hook-form";

const FormC = ({onSubmit, form}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        id="form__contact"
        className="flex__column form__contact"
      >
        <div className="flex__column group__date-form">
          <label htmlFor="fullname" className="p__color p__roboto p__label">
            Nombre y apellido:
          </label>
          <input
            type="text"
            {...register("name", {
              required: true,
              pattern: /^[ a-zA-ZÑñáéíóúÁÉÍÓÚ ]+$/i,
            })}
            placeholder="Escribe tu nombre completo"
          />
          {errors.name?.type == "required" && <p>El nombre es requerido</p>}
          {errors.name?.type == "pattern" && (
            <p className="validate__name p__robot">
              El nombre solo debe contener letras
            </p>
          )}
        </div>
        <div className="flex__column group__date-form">
          <label htmlFor="email" className="p__color p__roboto p__label">
            E-mail:
          </label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z0-9.-_]+@[A-Za-z]+\.[A-Za-z]+$/i,
            })}
            placeholder="alguien@nombre.dominio"
          />
          {errors.email?.type == "required" && <p>El correo es requerido</p>}
          {errors.email?.type == "pattern" && (
            <p className="validate__correo p__robot">
              Ingrese un correo válido
            </p>
          )}
        </div>
        <div className="flex__column group__date-form">
          <label htmlFor="message" className="p__color p__roboto p__label">
            Tu mensaje:
          </label>
          <input
            type="text"
            {...register("msg", {
              required: true,
              pattern: /^[ a-zA-ZÑñáéíóúÁÉÍÓÚ -,-;:_.?¿¡! ]+$/i,
            })}
            placeholder="Escribe tu mensaje"
          />
          {errors.msg?.type == "required" && <p>El mensaje es requerido</p>}
          {errors.msg?.type == "pattern" && (
            <p className="validate__message p__robot">
              Solo ingrese el mensaje que deba ingresar, no es necesario agregar
              números o caracteres especiales
            </p>
          )}
        </div>
        <div className="error">
          <p className="p__error p__roboto error__text"></p>
          <ul className=" p__roboto list__error"></ul>
        </div>
        <button type="submit" className="submit button__cta">
          Enviar
        </button>
      </form>
    </>
  );
};

export default FormC;
