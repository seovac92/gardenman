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
        </section>
      </main>
      <aside></aside>
      <footer>
      </footer>
    </>
  );
}
