import Image from "next/image";

export default function Featured() {
  1;
  const featuredProducts = [
    {
      name: "headphone one black",
      price: "29",
      image: "/images/feature1.png",
    },
    {
      name: "speaker beats pilll",
      price: "199",
      image: "/images/feature2.png",
    },
    {
      name: "apple air pods",
      price: "122",
      image: "/images/feature3.png",
    },
    {
      name: "smartwatch f9 negro",
      price: "99",
      image: "/images/feature4.png",
    },
  ];
  return (
    <section className="grid-container pt-20 pb-10 " id="Featured">
      <main className="col-start-2 col-end-2">
        <div className="text-center">
          <h1 className="font-semibold mb-4 text-2xl">FEATURED PRODUCTS</h1>
          <button className="hover:text-pitch border py-3 px-6 rounded-full hover:border-pitch transform hover:scale-110 mb-10 ">
            View All
          </button>

          <div className="grid gap-5 md:grid-cols-4 ">
            {featuredProducts.map(({ image, name, price }) => (
              <div
                className="border p-4 bg-gray-200 relative cursor-pointer transform hover:-translate-y-5  "
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
