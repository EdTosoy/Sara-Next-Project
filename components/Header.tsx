import { useContext } from "react";
import { MenuContext } from "../ContextAPI/menuContext";

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

  const { openMenu, setOpenMenu } = useContext(MenuContext);
  return (
    <header className="grid-container border-b sticky top-0 z-50 py-2  bg-gray-200">
      {openMenu && (
        <div className="col-start-1 md:hidden  col-end-4">
          <div className="top-16 border-t border-b shadow-xl absolute w-full  text-center  p-6 bg-white ">
            {nav.map(({ name, id }) => (
              <a href={`#${id}`} key={name}>
                <nav className="cursor-pointer navigation my-4 hover:text-pitch ">
                  {name}
                </nav>
              </a>
            ))}
          </div>
        </div>
      )}
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
          <div
            className="grid md:hidden place-content-center cursor-pointer"
            onClick={() => {
              setOpenMenu((prev) => !prev);
              console.log(openMenu);
            }}
          >
            <box-icon name="menu"></box-icon>
          </div>
        </div>
      </main>
    </header>
  );
}
