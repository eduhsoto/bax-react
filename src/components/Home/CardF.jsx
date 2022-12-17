const CardF = ({title, img, alt, paragraph}) => {
  return (
    <div className="card__item object__animate card__animate zoomIn">
      <h3 className="title__course">{title}</h3>
      <img
        src={img}
        alt={alt}
        className="philosophy__image"
      />
      <p className="p__philosophy p__roboto">
        {paragraph}
      </p>
    </div>
  );
};

export default CardF;
