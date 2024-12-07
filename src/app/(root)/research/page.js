export default function Research() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Research</h1>
      <p className="text-lg">
        This page showcases the valuable insights gathered from our user surveys.
      </p>
      <div className="mt-6">
        {/* Add PNG images */}
        <img src="/images/research/survey-results-1.png" alt="Survey Results 1" className="mb-4 w-full" />
        <img src="/images/research/survey-results-2.png" alt="Survey Results 2" className="mb-4 w-full" />
        <img src="/images/research/survey-results-3.png" alt="Survey Results 3" className="w-full" />
      </div>
    </div>
  );
}
