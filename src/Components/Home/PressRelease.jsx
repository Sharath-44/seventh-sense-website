import React from 'react';
import YouTube from 'react-youtube';

const videos = [
  {
    videoId: 'DpG0u4OMe-E',
    title: "ITC's B-Natural 'Main Bhi Kisaan'",
    description: "Main Bhi Kisaan (Naanu Kooda Raita), a CSR initiative by ITC, B Natural in collaboration with Seventh Sense and AWAKE to empower and uplift 600+ women fruit farmers. Program Focusing on Financial, Technical,Nutritional literacy and Post production Management.",
  },
  {
    videoId: '2BP_6OSjWTA',
    title: "ITC's B-Natural 'Main Bhi Kisaan'",
    description: "'Main Bhi Kisaan' project's conclusion event with the Launch of B-Natural Limited Edition 'B-Farmerette' took place in Mumbai on the occasion of Women's Day 2024, which was featured on the CNBC TV18 'Future Female Forward' programme.The farmerettes had a chance to speak about their experience at the event.",
  },
  {
    videoId: 'VFslRbCi258',
    title: "UNICEF - School Innovation Program",
    description: "The Grand Finale of the School Innovation Program 2022-23 held at Christ University implemented by Seventh Sense in collaboration with Inqui-Lab Foundation.",
  },
  {
    videoId: 'BIQBqlFa91g',
    title: "Youth Co: Lab Summit",
    description: "Our Managing Director, Vinod Bannanje Prabhu, represented Seventh Sense as the implementing partner for the 5th Edition of Youth Co: Lab at the Youth Co: Lab Summit 2023 in Bangkok: Uniting for Impact through Inclusive Entrepreneurship.",
  },
  {
    videoId: 'BrXot0iVfe8',
    title: "HelloGeleyare",
    description: 'Our MD, Vinod Bannanje Prabhu, gave an insightful live interview on Doordarshan Chandana, discussing "HelloGeleyare Live Phone In Vruti Darshi: Appropriate Career Guidance for Students." His expert advice aimed to help students navigate their career paths effectively.',
  }
];

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
        <div>
            <YouTube videoId={videos[0].videoId} opts={opts} className="w-full mb-4" />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{videos[0].title}</h3>
              <p className="text-white text-justify">{videos[0].description}</p>
            </div>
          </div>
          <div>
            <YouTube videoId={videos[1].videoId} opts={opts} className="w-full mb-4" />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{videos[1].title}</h3>
              <p className="text-white text-justify">{videos[1].description}</p>
            </div>
          </div>
          <div>
            <YouTube videoId={videos[2].videoId} opts={opts} className="w-full mb-4" />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{videos[2].title}</h3>
              <p className="text-white text-justify">{videos[2].description}</p>
            </div>
          </div>
          <div>
            <YouTube videoId={videos[3].videoId} opts={opts} className="w-full mb-4" />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{videos[3].title}</h3>
              <p className="text-white text-justify">{videos[3].description}</p>
            </div>
          </div>
          <div>
            <YouTube videoId={videos[4].videoId} opts={opts} className="w-full mb-4" />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{videos[4].title}</h3>
              <p className="text-white text-justify">{videos[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressReleaseVideoSection;
