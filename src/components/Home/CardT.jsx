const CardT = ({img, paragraph, name, lineSide}) => {
  const line = "relative before:absolute before:w-[2px] before:h-[60%] before:-left-[9%] before:top-0 before:bottom-0 before:bg-color_secondary_2";
  return (
    <div className={`flex items-center flex-col ${lineSide ? line : ''}`}>
      <img src={img} alt="testimony person"/>
      <p className="italic font-normal leading-[30px] mt-14">
        {paragraph}
      </p>
      <p className="italic font-normal leading-[30px] mt-14">{name}</p>
    </div>
  );
};

export default CardT;
