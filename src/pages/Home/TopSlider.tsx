import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/banner/slider1.jpg";
import img2 from "../../assets/banner/slider2.jpg";
import img3 from "../../assets/banner/slider3.jpg";
import img4 from "../../assets/banner/slider4.jpg";
import img5 from "../../assets/banner/slider5.jpg";

const TopSlider = () => {
  const title = (
    <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white md:text-8xl font-bold w-full">
      <p className="md:mr-64">FIND YOUR</p>
      <p className="md:ml-64">BEST SPORT</p>
      <p>MOTIVATION</p>
    </div>
  );
  return (
    <div className="mb-10">
      <Carousel>
        <div>
          <img className="relative" src={img1} />
          {title}
        </div>
        <div>
          <img src={img2} />
          {title}
        </div>
        <div>
          <img src={img3} />
          {title}
        </div>
        <div>
          <img src={img4} />
          {title}
        </div>
        <div>
          <img src={img5} />
          {title}
        </div>
      </Carousel>
    </div>
  );
};

export default TopSlider;
