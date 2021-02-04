import Head from "next/head";
import Collection from "../components/Collection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Offer from "../components/Offer";
import NewArrivals from "components/NewArrivals";
import NewsLetter from "components/NewsLetter";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>SARA</title>
        <meta
          name="description"
          content="SARA Group is a Singaporean multinational technology company which focuses mainly on e-commerce. Founded by Maximilian Bittner with the backing of Rocket Internet in 2012, it is currently owned by the Sara Group after its acquisition in 2016"
        />
      </Head>
      <Header />
      <Hero />
      <Collection />
      <Featured />
      <Offer />
      <NewArrivals />
      <NewsLetter />
      <Footer />
    </div>
  );
}
