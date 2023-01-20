const Qa = ({ q1, q2, q3 }) => {
  return (
    <div className="qa__content">
      <p className="text-[22px] text-color_primary_2 mb-14 leading-[60px] font-extrabold tablet:text-center">
        Preguntas frecuentes
      </p>

      <ol className="list-decimal">
        <div className="flex justify-between items-center mt-10 gap-32">
          <li className="font-roboto text-lg leading-[34px] font-semibold text-color_primary_2">
            {q1}
          </li>
          <img
            src="assets/img/keyboard_arrow_down.svg"
            alt="arrow down"
            className="arrow__down"
          />
        </div>
        <div className="flex justify-between items-center mt-10 gap-32">
          <li className="font-roboto text-lg leading-[34px] font-semibold text-color_primary_2">
            {q2}
          </li>
          <img
            src="assets/img/keyboard_arrow_down.svg"
            alt="arrow down"
            className="arrow__down"
          />
        </div>
        <div className="flex justify-between items-center mt-10 gap-32">
          <li className="font-roboto text-lg leading-[34px] font-semibold text-color_primary_2">
            {q3}
          </li>
          <img
            src="assets/img/keyboard_arrow_down.svg"
            alt="arrow down"
            className="arrow__down"
          />
        </div>
      </ol>
    </div>
  );
};

export default Qa;
