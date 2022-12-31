const Course = ({title, img, alt, paragraph, columnPos}) => {
  return (
    <div className={`flex items-stretch mx-20 my-3 w-[90%] place-items-end ${columnPos} phone:w-full phone:flex-col phone:mx-3 phone:my-3`}>
      <div className="bg-accent_color rounded-tl-[40px] px-10 py-10 phone:px-8 phone:py-5">
        <h3 className="uppercase text-color_primary_2">{title}</h3>
        <p className="text-lg leading-[34px] font-normal">
            {paragraph}
        </p>
      </div>
      <img
        src={img}
        alt={alt}
        className="w-2/5 phone:w-full"
      />
    </div>
  );
};

export default Course;