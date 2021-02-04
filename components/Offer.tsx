export default function Offer() {
  return (
    <section className="grid-container pt-20 pb-10">
      <main className=" h-80 col-start-1 col-end-4 offerbg bg-center bg-cover text-white text-center grid place-content-center ">
        <h1 className="text-5xl mb-2">SPECIAL OFFER</h1>
        <p className="tracking-widest">
          Special offer discounts for wemen this week only
        </p>
        <div className="mt-4 hover:scale-110 transform  ">
          <button className="py-3 px-6 rounded-full bg-pitch">SHOP MORE</button>
        </div>
      </main>
    </section>
  );
}
