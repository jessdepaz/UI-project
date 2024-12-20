import Image from 'next/image';

const images = [
  { src: '/images/wireframes/homepage.png', alt: 'Wireframe 1' },
  { src: '/images/wireframes/signup-signin.png', alt: 'Wireframe 2' },
  { src: '/images/wireframes/firsttimesetup.png', alt: 'Wireframe 3' },
  { src: '/images/wireframes/editorbuild.png', alt: 'Wireframe 4' },
  { src: '/images/wireframes/editordesign.png', alt: 'Wireframe 5' },
];

export default function Prototype() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Prototype</h1>
        <p className="text-md mb-6">
          Below is a Figma Embed showcasing our Prototype of BlissfulPages.
        </p>
        <div className="flex flex-col space-y-4 overflow-y-auto">
        <iframe
          className="relative w-full flex justify-center"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800"
          height="450"
          src="https://embed.figma.com/proto/l63soRl15awlQYJqt7s2II/BlissfulPages-Prototype?node-id=5-326&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A326&embed-host=share"
          allowFullScreen
        ></iframe>
        {/* <p className="text-md mb-6">
          Just in-case Figma Embed fails to work. Here are the images showcasing our various wireframe designs.
        </p>
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
          ))} */}
        </div>
      </div>
    );
}
