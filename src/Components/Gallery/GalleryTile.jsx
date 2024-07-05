import React from "react";
import PhotoAlbum from "react-photo-album";
import './gallerytile.css';
import { photos } from "../../Data/gallerytile";

const GalleryTile = () => {
  return (
    <div className="bg-gray-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-2 mt-10 font-extrabold text-white">Gallery</h2>
          <div className="h-1 w-24 bg-blue-800 mx-auto"></div>
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
      </div>
    </div>
  );
};

export default GalleryTile;
