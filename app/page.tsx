import Image from "next/image";

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
          <h1 className="-mt-10 font-bebas text-5xl text-white text-center md:-mt-16 md:text-8xl">GARDEN<span className="text-green-500">MAN</span></h1>
          <h2 className="font-allura text-3xl md:text-5xl text-white text-center mt-2">Cut Your Grass With Us</h2>
        </article>
        </section>
      </main>
      <aside></aside>
      <footer>
      </footer>
    </>
  );
}
