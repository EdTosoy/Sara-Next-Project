import Image from "next/image";

export default function NewsLetter() {
  1;
  const logos = [1, 2, 3, 4];
  return (
    <section className="grid-container pt-20 pb-10 ">
      <main className="col-start-2 col-end-2">
        <div className="text-center">
          <h1 className="font-semibold mb-4 text-2xl">OUR NEWSLETTER</h1>
          <p>Promotion new products and sales directy to you</p>
          <div className="p-1  max-w-sm  border-2 mt-4 mb-10 mx-auto flex justify-between  rounded-full ">
            <input
              type="text"
              name="email"
              id="email"
              aria-label="email"
              placeholder="John.doe@gmail.com"
              className="rounded-full ml-3 w-40 md:w-auto"
            />
            <button className="bg-pitch text-sm md:text-base text-white border py-1 sm:py-2 px-2 sm:px-4 rounded-full  transform hover:scale-105 ">
              SUBSCRIBE
            </button>
          </div>

          <div className="grid gap-5  grid-cols-4 ">
            {logos.map((number) => (
              <div className="opacity-75 hover:opacity-100" key={number}>
                <Image
                  src={`/images/logo${number}.png`}
                  width={100}
                  height={100}
                  alt={`logo ${number}`}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
