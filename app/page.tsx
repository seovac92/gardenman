import Image from "next/image";
import SplitText from "../components/SplitText.jsx"
import PixelCard from '../components/PixelCard.jsx'

export default function Home() {
  return (
    <>
      <main>
        <section className="relative h-screen">
          <Image
            src="/hero.png"
            alt="GardenMan Hero"
            fill
            priority
            className="object-cover"
          />
        <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full bg-black/70 z-10 md:w-125"
        >
          <img className="w-[70%] mx-auto" src="/underlineImg2.png" alt="underline"/>
          <SplitText
            text="GARDENMAN"
            tag="h1"
            className="w-full -mt-10 font-bebas text-5xl text-white md:-mt-16 md:text-8xl"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <h2 className="font-allura text-3xl md:text-5xl text-white text-center mt-2">Cut your grass with us</h2>
        </article>
        </section>
      </main>
      <aside className="bg-gray-950 text-white">
        <h2 className="text-center font-bebas">ABOUT US</h2>
        <section className="mx-auto grid max-w-6xl grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PixelCard gap={5} speed={100} colors="#f8fafc,#f1f5f9,#cbd5e1">
            <div className="absolute top-0 left-0 bottom-0 right-0">
              <h3 className="text-center">proba</h3>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis error quidem rerum velit perspiciatis repudiandae a rem maiores quae dolor dolore, blanditiis ea quasi soluta earum sint magnam sed.</p>
            </div>
          </PixelCard>
          <PixelCard gap={5} speed={100} colors="#f8fafc,#f1f5f9,#cbd5e1"><div></div></PixelCard>
          <PixelCard gap={5} speed={100} colors="#f8fafc,#f1f5f9,#cbd5e1"><div></div></PixelCard>
          <PixelCard gap={5} speed={100} colors="#f8fafc,#f1f5f9,#cbd5e1"><div></div></PixelCard>
          <PixelCard gap={5} speed={100} colors="#f8fafc,#f1f5f9,#cbd5e1"><div></div></PixelCard>
          <PixelCard gap={5} speed={100} colors="#f8fafc,#f1f5f9,#cbd5e1"><div></div></PixelCard>
        </section>
      </aside>
      <footer>
      </footer>
    </>
  );
}
