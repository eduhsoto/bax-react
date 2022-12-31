const Course = ({img, alt, title, p1, p2, time, subjects}) => {
  return (
    <div className="mx-16 tablet:mx-8 phone:mx-4 flex justify-center items-center flex-wrap gap-16">
      <div className="right">
        <img
          src={img}
          alt={alt}
          className="img_full"
        />
      </div>
      <div className="left__course flex__column form__contact">
        <h3 className="title__course margin__bottom-none">{title}</h3>
        <p className="p__color p__roboto">
          {p1}
        </p>
        <p className="p__color p__roboto">
          {p2}
        </p>
        <p className="p__color p__roboto">
          {time} <br /> {subjects}
        </p>
      </div>
    </div>
  );
};

export default Course;