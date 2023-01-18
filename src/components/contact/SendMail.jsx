import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ErrorF from "./ErrorF";
import SucessF from "./SucessF";
import FormC from "./FormC";

const SendMail = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    sent: false,
    visible: true,
    error: false,
  });

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setFormState({ ...formState, sent: true, visible: false });
    } catch (error) {
      setFormState({ sent: false, visible: false, error: true });
      console.log(error);
    }
  };

  return (
    <>
      {formState.sent && <SucessF />}
      {formState.visible && <FormC onSubmit={onSubmit} form={form} />}
      {formState.error && <ErrorF />}
    </>
  );
};

export default SendMail;
