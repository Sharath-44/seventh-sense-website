import React from "react";
import PhotoAlbum from "react-photo-album";
import '../assets/gallery.css';
import {photos} from '../Data/galleryHome';

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
