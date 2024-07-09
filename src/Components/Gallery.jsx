import React from "react";
import PhotoAlbum from "react-photo-album";
import '../assets/gallery.css';

const photos = [
  { src: '/gallery/1.jpg', width: 1400, height: 900, key: '1' },
  { src: '/gallery/2.jpg', width: 1300, height: 900, key: '2' },
  { src: '/womenEmpowerment/we19.jpg', width: 1200, height: 900, key: '3' },
  { src: '/gallery/48.jpg', width: 1400, height: 900, key: '4' },
  { src: '/galleryImage3.JPG', width: 1400, height: 900, key: '5' },
  { src: '/gallery/4.jpg', width: 1200, height: 900, key: '6' },
  { src: '/galleryImage6.jpg', width: 1400, height: 900, key: '7' },
  { src: '/gallery/7.jpg', width: 1400, height: 1000, key: '8' },
  { src: '/gallery/5.jpg', width: 1200, height: 1200, key: '9' },
];

const Gallery = () => {
  return (
    <div className="bg-gray-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-2 font-extrabold text-white">From The Archives</h2>
          <div className="h-1 w-24 bg-blue-800 mx-auto mb-4"></div>
        </div>
        <div className="gallery">
          <PhotoAlbum 
            layout="rows" 
            photos={photos} 
            renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
              <div 
                key={photo.key}
                style={wrapperStyle} 
                className="hover:transform hover:scale-105 transition-transform duration-300">
                {renderDefaultPhoto({ wrapped: true })}
              </div>
            )}
          />
        </div>
        <div className="text-center mt-8 ">
          <a 
            href="/gallery" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-800 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition-colors duration-300 font-bold"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
