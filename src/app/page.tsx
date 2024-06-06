import Image from 'next/image';
import ECard from '@/Components/ECard';
import CTA from '@/Components/CTA';
import '../app/globals.css';

export default function Home() {
  return (
    <div className='container px-1  m-9'>
      <div className="container bg-blue-500 rounded flex flex-row items-center justify-center mb-10">
        <div className="flex flex-col w-full pr-8 lg:w-1/4 w-2/3">
          <h1 className="text-4xl">Your partner for every marketing activity!</h1>
          <p className="text-xs pt-4">We support your project day to day!</p>
        </div>
        <div className="w-2/6">
          <Image
            src="https://placehold.jp/1000x1000.png"
            alt="Your marketing partner in action" // Descriptive alt text
            width={600}
            height={400}
            layout="responsive" // Use Next.js's responsive lay out for optimal image display
            priority // Optionally prioritize loading the image (adjust based on layout)
          />
        </div>
      </div>
      <div className="container bg-blue-500 rounded flex flex-row items-center justify-center mb-10 p-4 ">
        <div className="containerGrid">
          <div className="Card w-full p-2">
            <ECard />
          </div>
          <div className="Header">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Vestibulum est dolor, gravida et sagittis sit amet, dapibus in lectus.</div>
          <div className="CTA"> <CTA/> </div>
        </div>
      </div> 
    </div>

  );
}
