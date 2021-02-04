import Image from "next/image";
export default function Footer() {
  const footerLink = [
    {
      title: "EXPLORE",
      sub1: "Home",
      sub2: "Featured",
      sub3: "New",
      sub4: "Subscribe",
    },
    {
      title: "OUR SERVICES",
      sub1: "Pricing",
      sub2: "Free Shipping",
      sub3: "Gift Cards",
      sub4: "",
    },
  ];
  return (
    <footer className="grid-container bg-gray-900 text-white py-20 ">
      <main className="col-start-2 col-end-3 grid gap-10  md:grid-cols-4 text-gray-500">
        <div className="">
          <h1 className="mb-4 text-white">SARA</h1>
          <p className="mb-4 text-sm hover:text-white cursor-pointer">Products store</p>
          <div className="flex">
            <Image src="/images/footerstore1.png" width={200} height={50} />
            <Image src="/images/footerstore2.png" width={200} height={50} />
          </div>
        </div>
        {footerLink.map(({ title, sub1, sub2, sub3, sub4 }) => (
          <div className="" key={title}>
            <h1 className="mb-4 text-white ">{title}</h1>
            <p className="mb-4 hover:text-white cursor-pointer text-sm">{sub1}</p>
            <p className="mb-4 hover:text-white cursor-pointer text-sm">{sub2}</p>
            <p className="mb-4 hover:text-white cursor-pointer text-sm">{sub3}</p>
            <p className="mb-4 hover:text-white cursor-pointer text-sm">{sub4}</p>
          </div>
        ))}

        <div className="">
          <h1 className="mb-4 text-white">FOLLOW</h1>
          <box-icon
            animation="burst-hover"
            type="logo"
            name="facebook"
            color="gray"
          ></box-icon>
          <box-icon
            animation="burst-hover"
            name="twitter"
            type="logo"
            color="gray"
          ></box-icon>
          <box-icon
            animation="burst-hover"
            name="instagram"
            type="logo"
            color="gray"
          ></box-icon>
        </div>
      </main>
    </footer>
  );
}
