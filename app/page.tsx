import Image from "next/image";
import SplitText from "../components/SplitText.jsx"

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
        <h2>PROBA</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sint hic error perferendis adipisci, architecto eveniet ad molestias recusandae ea, velit illum quia, earum magnam cumque minima animi quis inventore. Facilis, eum reiciendis sed minus adipisci rem aliquid voluptatibus quibusdam ipsam repellat blanditiis obcaecati sit recusandae. Sit inventore quos odit possimus, ab iusto voluptatibus ipsum voluptatum odio veritatis voluptatem animi, nihil reiciendis laudantium vitae corporis quo, asperiores architecto. Enim, voluptates nam. Itaque debitis repellat recusandae nostrum quia maxime nam saepe maiores, reiciendis rerum ratione aliquam autem dolorem, eveniet similique dignissimos qui totam porro, error et? Officia voluptatem ut provident commodi!</p>
      </aside>
      <footer>
      </footer>
    </>
  );
}
