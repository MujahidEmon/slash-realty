const Slider = () => {
  return (
    <div className="carousel lg:h-[500px] md:h-[400px] h-80 rounded-lg  object-cover w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="/src/assets/slider1.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-outline btn-primary">
            ❮
          </a>
          <a href="#slide2" className="btn btn-outline btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="/src/assets/slider2.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-outline btn-primary">
            ❮
          </a>
          <a href="#slide3" className="btn btn-outline btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="/src/assets/slider3.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-outline btn-primary">
            ❮
          </a>
          <a href="#slide4" className="btn btn-outline btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="/src/assets/slider4.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-outline btn-primary">
            ❮
          </a>
          <a href="#slide1" className="btn btn-outline btn-primary">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
