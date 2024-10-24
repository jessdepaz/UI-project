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
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <div key={index} className="relative">
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
