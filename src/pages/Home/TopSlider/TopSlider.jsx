import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/banner/slider1.jpg'
import img2 from '../../../assets/banner/slider2.jpg'
import img3 from '../../../assets/banner/slider3.jpg'
import img4 from '../../../assets/banner/slider4.jpg'
import img5 from '../../../assets/banner/slider5.jpg'

const TopSlider = () => {
    return (
        <div className='mb-10'>
            <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
            </Carousel>
        </div>
    );
};

export default TopSlider;