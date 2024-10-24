import Image from 'next/image';


const images = [
  { src: '/images/Jessica&Michael.jpg', alt: 'Description of image 1' },
  { src: '/images/Lina&David.jpg', alt: 'Description of image 2' },
  { src: '/images/Sophia&Mark.jpg', alt: 'Description of image 3' },
];


export default function Scenario() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Scenario</h1>
        <p className="text-lg">
          Scenarios for the Couples
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
