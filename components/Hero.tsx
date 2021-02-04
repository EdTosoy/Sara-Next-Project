import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid-container bg-gray-200 ">
      <main className="col-start-2 col-end-2   flex flex-col md:flex-row md:justify-between pt-20 md:mx-20  ">
        <div className="font-semibold md:mt-20    ">
          <h1 className=" mb-1 md:mb-8 md:-ml-2 md:tracking-widest text-5xl md:text-8xl ">NEW</h1>
          <h2 className=" mb-10 text-3xl md:tracking-widest md:text-5xl">ARRIVALS</h2>
          <button className="py-3 px-5 bg-pitch text-xs text-white transform hover:scale-110 ">
            GO SHOPPING
          </button>
        </div>
        <div className="grid justify-end -right-0 md:top-0 md:w-1/2 -mt-24 md:mt-0">
          <div className="w-200 h-400 relative md:w-96 md:h-80vh   ">
            <Image src="/images/home.png"  layout="fill"alt="hero"  />
          </div>
        </div>
      </main>
    </section>
  );
}
