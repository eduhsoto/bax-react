const CardF = ({title, img, alt, paragraph}) => {
  return (
    <div className="flex items-center flex-col">
      <h3 className="uppercase">{title}</h3>
      <img
        src={img}
        alt={alt}
        className="rounded-tr-[50px]"
      />
      <p className="bg-color_primary_1 rounded-b-[40px] px-8 py-8 h-full text-color_default text-lg leading-[34px] font-normal">
        {paragraph}
      </p>
    </div>
  );
};

export default CardF;
