import { useForm } from "react-hook-form";

const FormC = ({onSubmit, form}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const inputClass = "h-9 rounded-xl border bg-accent_color_form px-3 focus:outline-color_secondary_1 focus:text-color_secondary_1 focus:bg-color_default"
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        id="form__contact"
        className="flex flex-col items-stretch gap-6"
      >
        <div className="flex flex-col gap-1 items-stretch">
          <label htmlFor="fullname" className="font-roboto text-base font-normal text-color_primary_2">
            Nombre y apellido:
          </label>
          <input
            type="text"
            {...register("name", {
              required: true,
              pattern: /^[ a-zA-ZÑñáéíóúÁÉÍÓÚ ]+$/i,
            })}
            placeholder="Escribe tu nombre completo"
            className={`${inputClass} ${errors.name ? 'border-error_input focus:outline-error_input' : 'border-accent_color_form'}`}
          />
          {errors.name?.type == "required" && <p className="px-3 text-error_input">El nombre es requerido</p>}
          {errors.name?.type == "pattern" && (
            <p className="px-3 text-error_input">
              El nombre solo debe contener letras
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1 items-stretch">
          <label htmlFor="email" className="font-roboto text-base font-normal text-color_primary_2">
            E-mail:
          </label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z0-9.-_]+@[A-Za-z]+\.[A-Za-z]+$/i,
            })}
            placeholder="alguien@nombre.dominio"
            className={`${inputClass} ${errors.email ? 'border-error_input focus:outline-error_input' : 'border-accent_color_form'}`}
          />
          {errors.email?.type == "required" && <p className="px-3 text-error_input">El correo es requerido</p>}
          {errors.email?.type == "pattern" && (
            <p className="px-3 text-error_input">
              Ingrese un correo válido
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1 items-stretch">
          <label htmlFor="message" className="font-roboto text-base font-normal text-color_primary_2">
            Tu mensaje:
          </label>
          <input
            type="text"
            {...register("msg", {
              required: true,
              pattern: /^[ a-zA-ZÑñáéíóúÁÉÍÓÚ -,-;:_.?¿¡! ]+$/i,
            })}
            placeholder="Escribe tu mensaje"
            className={`${inputClass} h-[200px] pb-[150px] ${errors.msg ? 'border-error_input focus:outline-error_input' : 'border-accent_color_form'}`}
          />
          {errors.msg?.type == "required" && <p className="px-3 text-error_input">El mensaje es requerido</p>}
          {errors.msg?.type == "pattern" && (
            <p className="px-3 text-error_input">
              Solo ingrese el mensaje que deba ingresar, no es necesario agregar
              números o caracteres especiales
            </p>
          )}
        </div>
        <button type="submit" className="button-cta px-[30px] py-[10px] self-end mt-8">
          Enviar
        </button>
      </form>
    </>
  );
};

export default FormC;
