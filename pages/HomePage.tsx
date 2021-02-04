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
        <title>Redstore</title>
        <meta
          name="description"
          content="Our menu is constantly evolving, yet always abides by a few simple constants. All of our cooking revolves around open wood fire. We work with a small group of fisherman, hunters, gatherers, ranchers, and farmers to find and follow microclimates that produce specific tastes from wild foods. Lastly, we steer clear of imported and commercial goods, opting instead to build our own pantry through patient harvesting and preservation."
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
