export default function Personas() {
  const personas = [
    {
      name: "Emily & Jack",
      age: 28,
      frustrations: "Current wedding websites are too rigid and do not allow for personalization.",
      motivations: "They want their wedding site to reflect their unique style and love story.",
      backstory: "Emily and Jack have been together for five years. They are both creative professionals and want their wedding to be a true expression of their journey together.",
      idealExperience: "A sleek, minimalist website where they can easily customize the layout, colors, and sections like RSVP and venue details.",
    },
    {
      name: "Sophia & Mark",
      age: 30,
      frustrations: "The lack of bilingual options on most platforms makes it hard to include their families from different backgrounds.",
      motivations: "They want to ensure that everyone feels included in their wedding planning process.",
      backstory: "Sophia is bilingual and has family in Spain, while Mark's family speaks only English. They want their wedding to honor both cultures.",
      idealExperience: "A user-friendly site that allows them to easily toggle between English and Spanish, with personalized sections for both families.",
    },
    {
      name: "Maria & Luis",
      age: 26,
      frustrations: "Most wedding websites lack interactivity and are too simplistic.",
      motivations: "They want their guests to feel engaged and excited about the wedding.",
      backstory: "Maria and Luis met through mutual friends and have always enjoyed creating interactive experiences together. They want their website to reflect that.",
      idealExperience: "An interactive timeline that showcases their relationship milestones, with features like live guest count updates and the ability to customize every aspect.",
    },
    {
      name: "Sarah & Jordan",
      age: 27,
      frustrations: "They can not find a platform that allows for visual customization to match their wedding theme.",
      motivations: "A beautiful site that matches their dusty sage green, ivory, and gold color palette is essential.",
      backstory: "Sarah loves aesthetics and has a keen eye for design, while Jordan wants to ensure the site is user-friendly for all guests.",
      idealExperience: "A highly customizable website where they can choose colors, fonts, and layouts to perfectly match their wedding theme.",
    },
    {
      name: "Lina & David",
      age: 29,
      frustrations: "Current platforms require coding knowledge for in-depth customization.",
      motivations: "They want a site that feels personal and unique without needing tech skills.",
      backstory: "Lina and David are DIY enthusiasts who enjoy crafting and designing. They want to create a wedding site that reflects their personality.",
      idealExperience: "A drag-and-drop interface that allows them to change fonts, upload videos, and tweak every detail easily.",
    },
    {
      name: "Jessica & Michael",
      age: 25,
      frustrations: "Limited customization options on existing platforms mean their site will look generic.",
      motivations: "A bilingual, customizable website is vital for their multicultural wedding.",
      backstory: "Jessica is from a Hispanic background, and Michael is from an English-speaking family. They want to merge both cultures seamlessly.",
      idealExperience: "A wedding website that allows for bilingual options, personalized invitations, and customizable RSVP forms tailored to each language.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Personas</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {personas.map((persona, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold">{persona.name} (Age: {persona.age})</h2>
            <p className="mt-2 text-gray-600"><strong>Frustrations:</strong> {persona.frustrations}</p>
            <p className="mt-2 text-gray-600"><strong>Motivations:</strong> {persona.motivations}</p>
            <p className="mt-2 text-gray-600"><strong>Backstory:</strong> {persona.backstory}</p>
            <p className="mt-2 text-gray-600"><strong>Ideal Experience:</strong> {persona.idealExperience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
