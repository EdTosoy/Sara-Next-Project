import Image from "next/image";

export default function NewArrivals() {
  1;
  const newProducts = [
    {
      name: "headphone one black",
      price: "29",
      image: "/images/new1.png",
    },
    {
      name: "speaker beats pilll",
      price: "199",
      image: "/images/new2.png",
    },
    {
      name: "apple air pods",
      price: "122",
      image: "/images/new3.png",
    },
    {
      name: "smartwatch f9 negro",
      price: "99",
      image: "/images/new4.png",
    },
    {
      name: "smartwatch f9 negro",
      price: "99",
      image: "/images/new5.png",
    },
    {
      name: "smartwatch f9 negro",
      price: "99",
      image: "/images/new6.png",
    },
  ];
  return (
    <section className="grid-container pt-20 pb-10 ">
      <main className="col-start-2 col-end-2">
        <div className="text-center">
          <h1 className="font-semibold mb-4 text-2xl">NEW ARRIVALS</h1>
          <button className="hover:text-pitch border py-3 px-6 rounded-full hover:border-pitch transform hover:scale-110 mb-10 ">
            View All
          </button>

          <div className="grid gap-10 md:grid-cols-3 ">
            {newProducts.map(({ image, name, price }) => (
              <div
                className="border p-4 bg-gray-200 relative cursor-pointer transform hover:scale-105  "
                key={name}
              >
                <div className="bg-pitch p-2 absolute  text-white top-0 left-0 text-sm ">
                  NEW
                </div>
                <div className="">
                  <Image src={image} width={250} height={250} alt={name} />
                </div>
                <h1 className="uppercase mb-4">{name}</h1>
                <p className="text-pitch tracking-widest">${price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
