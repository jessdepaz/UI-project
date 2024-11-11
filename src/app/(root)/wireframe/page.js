import Image from 'next/image';

const images = [
  { src: '/images/wireframes/wireframe1.png', alt: 'Wireframe 1' },
  { src: '/images/wireframes/wireframe2.png', alt: 'Wireframe 2' },
  { src: '/images/wireframes/wireframe3.png', alt: 'Wireframe 3' },
  { src: '/images/wireframes/wireframe4.png', alt: 'Wireframe 4' },
  { src: '/images/wireframes/wireframe5.png', alt: 'Wireframe 5' },
];

export default function WireframeGallery() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Wireframe Gallery</h1>
        <p className="text-md mb-6">
          Below are images showcasing various wireframe designs.
        </p>
        <div className="flex flex-col space-y-4 overflow-y-auto">
          {images.map((image, index) => (
            <div key={index} className="relative w-full flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={600} // Adjust as needed
                height={400} // Adjust as needed
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
}
