import Image from 'next/image';

const images = [
  { src: '/images/scenario/Jessica&Michael.jpg', alt: 'Jessica and Micheal Scenario Chart' },
  { src: '/images/scenario/Lina&David.jpg', alt: 'Lina and David Scenario Chart' },
  { src: '/images/scenario/Sophia&Mark.jpg', alt: 'Sophia and Mark Scenario Chart' },
];

export default function Scenario() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Scenarios</h1>
        <p className="text-md">
          Below are images showing the possible scenarios for our ideal personas.
        </p>
        <div className="mt-4 flex flex-col items-center space-y-4">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full flex justify-center">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={600} // Desired width
                            height={400} // Desired height
                            className="rounded-lg"
                        />
                    </div>
                ))}
      </div>
    </div>
    );
}
