import StoryboardCard from '../../components/StoryboardCard';

export default function Storyboard() {

  const storyboardPanels = [
    {
      imageSrc: '/images/storyboard/panel1.png', // Example image path
      altText: 'Emily & Jack Introduction',
      title: '1: Introduction to the Persona',
      description: 'Meet Emily & Jack, a creative couple frustrated by rigid, uninspiring wedding website templates.',
    },
    {
      imageSrc: '/images/storyboard/panel2.png',
      altText: 'Discovery of the platform',
      title: '2: Discovery of BlissfulPages',
      description: 'Emily discovers a new wedding website platform that promises full customization.',
    },
    {
      imageSrc: '/images/storyboard/panel3.png', // Example image path
      altText: 'Initial Setup',
      title: '3: Initial Setup',
      description: 'Emily & Jack start by selecting a minimalist template, eager to reflect their unique style.',
    },
    {
      imageSrc: '/images/storyboard/panel4.png',
      altText: 'Customization Begins',
      title: '4: Customization Begins',
      description: 'With the drag-and-drop interface, they personalize their layout. They add sections for their story, venue details, and an RSVP form.',
    },
    {
      imageSrc: '/images/storyboard/panel5.png',
      altText: 'Viewing their Website in Real-Time',
      title: '5: Viewing their Website in Real-Time',
      description: 'They preview updates in real time as they make changes, giving them confidence in their design choices. Their vision coming to life.',
    },
    {
      imageSrc: '/images/storyboard/panel6.png', // Example image path
      altText: 'Sharing with Guests',
      title: '6: Sharing with Guests',
      description: 'Emily & Jack send their website to guests, receiving compliments on how personal and unique it feels.',
    },
    {
      imageSrc: '/images/storyboard/panel7.png',
      altText: 'Final Outcome',
      title: '7: Final Outcome',
      description: 'They’ve created a website that truly tells their love story, without any of the frustration they had with other platforms.',
    },
    // Add more panels as needed...
  ];



    return (
      <div className="container mx-auto p-6">
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold text-center mb-8">Storyboard: Meet Emily & Jack</h1>

          <div className="flex flex-wrap justify-center">
            {storyboardPanels.map((panel, index) => (
              <StoryboardCard
                key={index}
                imageSrc={panel.imageSrc}
                altText={panel.altText}
                title={panel.title}
                description={panel.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  