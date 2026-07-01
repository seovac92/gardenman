import Image from "next/image";
import SplitText from "../components/SplitText.jsx"
import PixelCard from '../components/PixelCard.jsx'
import services from "@/data/services.js";

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
        <section className="py-10">
          <h2 className="mb-10 text-5xl text-center font-bebas md:text-8xl">SERVICES</h2>
          <section className="mx-auto grid max-w-6xl grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              services.map((service) => (
                <PixelCard key={service.id} variant="blue" gap={5} speed={100} colors="#99A0FF">
                  <div className="absolute top-0 left-0 bottom-0 right-0">
                    <img src={service.image} alt={service.image} />
                    <h3 className="font-bebas text-4xl text-green-700 tracking-wide">{service.title}</h3>
                    <div className="mx-auto my-3 h-[3px] w-10 rounded-full bg-green-700" />
                    <p className="text-black text-lg leading-snug">{service.text}</p>
                  </div>
                </PixelCard>
              ))
            }
          </section>
        </section>
        <section className="relative h-screen">
          <Image
            src="/hero2.png"
            alt="GardenMan Hero"
            fill
            priority
            className="object-cover"
          />
          <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full bg-black z-10 md:w-125"
          >
            <img className="w-[70%] mx-auto -mt-5" src="/underlineImg2.png" alt="underline"/>
            <SplitText
              text="ABOUT US"
              tag="h2"
              className="w-full -mt-16 font-bebas text-3xl text-white md:-mt-16 md:text-6xl"
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
            <p className="text-sm md:text-xl text-white text-center mt-2">With years of experience in lawn and garden maintenance, we deliver reliable, high-quality landscaping services throughout Greater Vancouver.</p>
          </article>
        </section>
      </aside>
      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-12 md:flex-row">
          {/* Left */}
          <article className="flex flex-col items-center md:items-start">
            <img
              src="/underlineImg2.png"
              alt="GardenMan"
              className="w-48"
            />

            <p className="max-w-sm text-center text-sm leading-6 text-zinc-400 md:text-left">
              Professional lawn care and landscaping services across Greater
              Vancouver. We take pride in keeping your outdoor spaces clean,
              healthy and beautiful.
            </p>
          </article>

          {/* Right */}
          <article className="flex flex-col items-center md:items-end">
            <h3 className="font-bebas text-3xl tracking-wider text-white">
              CONTACT
            </h3>

            <a
              href="tel:+16043529950"
              className="mt-4 text-zinc-300 transition hover:text-green-400"
            >
              +1 (604) 352-9950
            </a>

            <a
              href="mailto:seovacmarko5@gmail.com"
              className="mt-2 text-zinc-300 transition hover:text-green-400"
            >
              seovacmarko5@gmail.com
            </a>
          </article>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} GardenMan. All rights reserved.
        </div>
      </footer>
    </>
  );
}
