import Image from "next/image";
export default function Collection() {
  return (
    <section className="grid-container pt-20 pb-10">
      <main className="col-start-2 col-end-2 grid md:grid-cols-2 gap-5 md: justify-between ">
        <div className="flex border p-4  rounded-md  justify-around mb-4 shadow-md items-center">
          <div className="">
            <Image src="/images/backpackMan.png" width={130} height={150} />
          </div>
          <div className=" text-3xl">
            <h1 className="text-gray-600">MEN</h1>
            <h1>BACKPACK</h1>
            <button className="mt-8 text-sm hover:text-pitch ">
              View Collection
            </button>
          </div>
        </div>
        <div className="flex border p-4  rounded-md  justify-around mb-4 shadow-md items-center">
          <div className=" text-3xl">
            <h1 className="text-gray-600">WOMEN</h1>
            <h1>BACKPACK</h1>
            <button className="mt-8 text-sm hover:text-pitch ">
              View Collection
            </button>
          </div>
          <div className="">
            <Image src="/images/backpackWoman.png" width={130} height={150} />
          </div>
        </div>
      </main>
    </section>
  );
}
