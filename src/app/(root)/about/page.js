import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="auto-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">About The Team</h1>
        
        <p className="text-left mb-10">
        Our team is dedicated to creating a prototype for a wedding website maker 
        that aims to revolutionize the wedding industry by offering much-needed 
        customization options. As more young couples embark on their journey of marriage, 
        they seek interactive and inclusive experiences that reflect their unique love stories. 
         By leveraging innovative design and user-friendly features, our platform will empower couples
         to create personalized wedding websites that not only capture their vision but also engage 
         their guests in meaningful ways. We believe that this approach will not only enhance the wedding
         planning process but also foster a deeper connection between couples and their loved ones.
        </p>

        <div className="mt-4 flex flex-col space-y-4 items-center">
          {/* Jessica De-Paz */}
          <div className="text-left">
            <Image
              src="/images/about/JessicaHeadshot.jpg"
              alt="Jessica De-Paz"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h2 className="mt-4 text-xl font-semibold text-left">Jessica De-Paz</h2>
            <p className="text-left">Magna cillum fugiat elit culpa nulla Lorem irure elit minim. Elit labore duis aliquip Lorem ipsum ut nostrud adipisicing fugiat nisi consectetur magna. Enim in ipsum pariatur exercitation ea elit sunt enim fugiat ut officia in laboris sunt.</p>
          </div>

          {/* Kristian Correa */}
          <div className="text-left">
            <Image
              src="/images/about/KristianHeadshot.jpg"
              alt="Kristian Correa"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h2 className="mt-4 text-xl font-semibold text-left">Kristian Correa</h2>
            <p className="text-left">Laborum laboris cillum reprehenderit ex Lorem in fugiat culpa consectetur mollit nulla. Sunt deserunt sint deserunt enim ullamco ad elit nisi. Officia laborum cillum et duis nostrud proident qui excepteur officia aliqua nostrud. Irure laborum proident aute officia anim. Eu sit dolor aliquip adipisicing ut ex veniam laborum enim duis mollit dolore deserunt. Amet sint fugiat do laborum sint reprehenderit. Ullamco adipisicing incididunt adipisicing ad laboris incididunt aliqua cupidatat sit laboris qui.</p>
          </div>

          {/* Valerie Benedit */}
          <div className="text-left">
            <Image
              src="/images/about/ValerieHeadshot.jpg"
              alt="Valerie Benedit"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h2 className="mt-4 text-xl font-semibold text-left">Valeria Benedit</h2>
            <p className="text-left">Nulla ad magna laboris laborum nisi aute non magna excepteur tempor pariatur elit consectetur voluptate. Duis voluptate mollit ad aliquip. Laboris anim sint reprehenderit nostrud minim quis non nulla do deserunt magna. Fugiat laborum ad amet nostrud commodo do labore magna adipisicing reprehenderit sunt ullamco sunt. Incididunt aute nulla fugiat ut officia voluptate. Ullamco aliquip nostrud commodo velit sit velit aliquip labore ex qui excepteur. Deserunt laboris dolor cillum labore sit irure consequat incididunt esse.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
