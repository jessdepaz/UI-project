export default function Personas() {
    const personas = [
      {
        name: "Emily & Jack",
        description: "A modern couple who wants a sleek, minimalist design for their wedding website. They value customization options for different sections, like RSVP, venue details, and gift registry integration.",
      },
      {
        name: "Sophia & Mark",
        description: "A couple who wants a traditional wedding but with some modern touches. They need a website that includes sections for both English and Spanish guests, and they also want a customizable photo gallery feature.",
      },
      {
        name: "Maria & Luis",
        description: "A tech-savvy couple looking for a highly interactive wedding website. They want features like interactive timelines, live guest count updates, and the ability to customize every aspect of the site.",
      },
      {
        name: "Sarah & Jordan",
        description: "A couple who cares about aesthetics and wants the ability to customize their wedding website’s theme to match their dusty sage green, ivory, and gold color palette.",
      },
      {
        name: "Lina & David",
        description: "A DIY couple who loves planning everything on their own. They need a highly customizable website that allows them to change fonts, upload their own videos, and tweak every detail without needing coding knowledge.",
      },
      {
        name: "Jessica & Michael",
        description: "A couple that wants a bilingual, highly customizable website for their bilingual (Spanish and English) wedding, with personalized invitations and RSVP forms tailored to each language.",
      },
    ];
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Personas</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold">{persona.name}</h2>
              <p className="mt-2 text-gray-600">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
