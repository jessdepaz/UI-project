export default function Moodboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Moodboard</h1>
      <p className="text-lg">
        This is the Moodboard page. Below is the image representing the moodboard.
      </p>
      <div className="mt-6">
        <img 
          src="/images/moodboard.png" 
          alt="Moodboard" 
          className="w-full h-auto rounded-lg shadow-md" 
        />
      </div>
    </div>
  );
}
