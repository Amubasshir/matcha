import { Play } from 'lucide-react';
import { useState } from 'react';
import defaultThumbnail from '../assets/lovable-uploads/school matcha drink.png';

const VideoSection = ({ title, description, videoUrl, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return '';
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
      : url;
  };

  // This function will handle video playback
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="py-16 bg-[#f8faf8]">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#035718]">
            {title || 'Our Story'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description ||
              'Matcha meets strawberry. Creamy oat base, cold-processed for 30 days of freshness – with 60mg of caffeine for calm energy and focus. Naturally sweetened, with no refined sugar. Vegan. Gluten-free. No compromises.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {' '}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#B8D5C7] shadow-lg">
            {isPlaying ? (
              <iframe
                src={getEmbedUrl(videoUrl)}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={thumbnailUrl || defaultThumbnail}
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  onClick={handlePlayVideo}
                  className="absolute inset-0 w-full h-full flex items-center justify-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-[#035718] flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play size={40} className="text-white ml-2" fill="white" />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-[#035718]"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                Natürliches Koffein (60mg)
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-[#035718]"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Zeremonieller Matcha</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-[#035718]"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Kein raffinierter Zucker</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-[#035718]"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Vegan & Glutenfrei</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
