import slider1 from '/src/assets/slider1.jpg'
import slider2 from '/src/assets/slider2.jpg'
import slider3 from '/src/assets/slider3.jpg'
import slider4 from '/src/assets/slider4.jpg'
const Slider = () => {
  return (
    <div className="carousel lg:h-[500px] md:h-[400px] h-80 rounded-lg  object-cover w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={slider1}
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
          src={slider2}
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
          src={slider3}
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
          src={slider4}
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
