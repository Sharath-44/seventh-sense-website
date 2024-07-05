import React from 'react';
import Slider from 'react-slick';
import { testimonials } from '../../Data/testimonialsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,   
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-8">
                <h2 className="text-4xl font-extrabold mb-1 text-center pb-2 text-gray-800">Testimonials</h2>
                <div className="h-1 w-24 bg-blue-800 mx-auto mb-4"></div>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6">
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <div className="w-full h-58 overflow-hidden mx-auto mb-4 transform transition duration-300 hover:scale-105 hover:shadow-xl relative">
                                    <a href={testimonial.path} target="_blank" rel="noopener noreferrer" className="relative group block">
                                        <img src={testimonial.imgSrc} alt={`Testimonial ${index + 1}`} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300">
                                            <FontAwesomeIcon icon={faPlay} className="text-white text-6xl" />
                                        </div>
                                    </a>
                                </div>
                                <p className="text-gray-700 mt-4">{testimonial.text}</p>
                                <p className="text-blue-500 mt-2 font-bold">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSlider;
