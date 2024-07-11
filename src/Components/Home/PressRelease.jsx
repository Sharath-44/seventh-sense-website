import React from 'react';
import YouTube from 'react-youtube';
import {videos} from '../../Data/pressRelease';

const PressReleaseVideoSection = () => {
  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl pb-2 font-extrabold text-white">Press Release & Videos</h2>
          <div className="h-1 w-24 bg-blue-800 mx-auto mb-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="w-full mb-4">
              {video.type === 'youtube' ? (
                <YouTube videoId={video.videoId} opts={opts} className="w-full" />
              ) : (
                <video className="w-full h-64" controls>
                  <source src={video.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-white text-justify">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressReleaseVideoSection;
