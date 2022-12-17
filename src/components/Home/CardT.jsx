export const CardT = ({img, paragraph, name}) => {
  return (
    <div className="card__item ">
      <img src={img} alt="testimony person"/>
      <p className="p__testinomy">
        {paragraph}
      </p>
      <p className="p__testinomy">{name}</p>
    </div>
  );
};
