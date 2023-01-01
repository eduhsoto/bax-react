const Course = ({img, alt, title, p1, p2, time, subjects}) => {
  return (
    <div className="mx-16 tablet:mx-8 phone:mx-4 flex justify-center items-center flex-wrap gap-16">
      <div className="max-w-[600px]">
        <img
          src={img}
          alt={alt}
          className="img_full"
        />
      </div>
      <div className="flex flex-col items-stretch gap-6 max-w-[480px]">
        <h3 className="mb-0 uppercase text-color_primary_2">{title}</h3>
        <p className="text-color_primary_2 text-lg font-normal leading-[34px]">
          {p1}
        </p>
        <p className="text-color_primary_2 text-lg font-normal leading-[34px]">
          {p2}
        </p>
        <p className="text-color_primary_2 text-lg font-normal leading-[34px]">
          {time} <br /> {subjects}
        </p>
      </div>
    </div>
  );
};

export default Course;