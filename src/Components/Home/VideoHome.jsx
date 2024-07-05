import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselCustom.css'; // Custom CSS for text overlay

const CarouselComponent = () => {
  const slides = [
    { imgSrc: 'homeSlideshow/1.png', text: 'Women Empowerment', url: '/women-empowerment' },
    { imgSrc: 'homeSlideshow/2.png', text: 'Innovation & Entrepreneurship', url: '/innovation-entrepreneurship' },
    { imgSrc: 'homeSlideshow/5.png', text: 'Skilling', url: '/skilling' },
    { imgSrc: 'homeSlideshow/3.png', text: 'Employment', url: '/employment' },
    { imgSrc: 'homeSlideshow/4.png', text: 'Research', url: '/research' }
  ];

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        stopOnHover={true}
      >
        {slides.map((slide, index) => (
          <a href={slide.url} key={index} className="carousel-slide">
            <div className="image-wrapper">
              <img src={slide.imgSrc} alt={`Slide ${index + 1}`} className="carousel-image" />
              <div className="image-overlay"></div>
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
