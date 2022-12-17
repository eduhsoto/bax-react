const Course = ({title, img, alt, paragraph}) => {
  return (
    <div className="item__course course1 object__animate card__animate zoomIn">
      <div className="description__course">
        <h3 className="title__course">{title}</h3>
        <p className="p__roboto p__color">
            {paragraph}
        </p>
      </div>
      <img
        src={img}
        alt={alt}
        className="img__course"
      />
    </div>
  );
};

export default Course;