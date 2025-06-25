import banner from '../../../../public/images/283630-cover.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TrialSilder = () => {
    return (
        <div>
            <Carousel
                autoPlay
                infiniteLoop
                interval={2000} // Slide every 2 seconds
                showStatus={false}
                showThumbs={false}
            >
                <div>
                    <img src={banner} alt="Image 1" />
                </div>
                <div>
                    <img src={banner} alt="Image 2" />
                </div>
                <div>
                    <img src={banner} alt="Image 3" />
                </div>
            </Carousel>
        </div>
    );
};

export default TrialSilder;