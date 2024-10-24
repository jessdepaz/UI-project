import React from 'react';
import Image from 'next/image';

const StoryboardCard = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6 m-4">
      {/* Image */}
      <div className="mb-4">
        <Image src={imageSrc} alt={altText} width={500} height={300} className="rounded-lg" />
      </div>
      {/* Title heading */}
      <div className="text-center py-1">
        <p className="text-lg font-semibold text-gray-800">{title}</p>
      </div>
      {/* Text description */}
      <div className="text-center">
        <p className="text-lg font-medium text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default StoryboardCard;