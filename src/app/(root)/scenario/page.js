import Image from 'next/image';
import myImage1 from '/Users/Valerie/Desktop/UI-project/src/app/(root)/scenario/Jessica&Michael.jpg';
import myImage2 from '/Users/Valerie/Desktop/UI-project/src/app/(root)/scenario/Lina&David.jpg';
import myImage3 from '/Users/Valerie/Desktop/UI-project/src/app/(root)/scenario/Sophia&Mark.jpg'; // Adjust the path as necessary

const images = [
  { src: myImage1, alt: 'Description of image 1' },
  { src: myImage2, alt: 'Description of image 2' },
  { src: myImage3, alt: 'Description of image 3' },
];


export default function Scenario() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Research</h1>
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
