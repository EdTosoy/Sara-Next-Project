export default function Header() {
  const nav = [
    {
      name: "Home",
      id: "Home",
    },
    {
      name: "Featured",
      id: "Featured",
    },
    {
      name: "New",
      id: "New",
    },
    {
      name: "Subscribe",
      id: "Subscribe",
    },
  ];
  return (
    <header className="grid-container border-b bg-gray-200">
      <main className="col-start-2 col-end-3 py-3 flex justify-between">
        <div className="">
          <a href="#">
            <h1 className="font-semibold">SARA</h1>
          </a>
        </div>
        <div className="flex gap-4">
          <div className="hidden md:flex ">
            {nav.map(({ name, id }) => (
              <nav key={id} className="mr-10">
                <a href={`#${id}`} className="hover:text-pitch">
                  {name}
                </a>
              </nav>
            ))}
          </div>
          <div className="grid place-content-center cursor-pointer">
            <box-icon name="cart"></box-icon>
          </div>
          <div className="grid md:hidden place-content-center cursor-pointer">
            <box-icon name="menu"></box-icon>
          </div>
        </div>
      </main>
    </header>
  );
}
