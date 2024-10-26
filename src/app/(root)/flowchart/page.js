  export default function Flowchart() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Flowchart</h1>
      <p className="text-lg">
        This is the Flowchartpage. Below is the image representing the flowchart.
      </p>
      <div className="mt-6">
        <img 
          src="/images/flowchart.png" 
          alt="flowchart" 
          className="w-full h-auto rounded-lg shadow-md" 
        />
      </div>
    </div>
  );
}
