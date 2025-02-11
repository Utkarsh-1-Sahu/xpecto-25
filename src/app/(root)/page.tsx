import React from "react";
import HomeScreen from "@/components/common/home";
import AboutXpecto from "@/components/home/about-xpecto";
import Marquee from "@/components/common/scrollable-marquee";
import AboutIITMandi from "@/components/home/about-iitmd";
import MerchPromo from "@/components/home/merch-promo";
import Footer from "@/components/home/footer";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-neutral-900">
      <HomeScreen />
      {/* TODO: Change text */}
      <Marquee speed={5}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        architecto, cum delectus eaque eligendi eos est eveniet explicabo fugiat
        laboriosam magnam neque.
      </Marquee>
      {/* TODO: Add featured events section */}
      <AboutXpecto />
      <AboutIITMandi />
      <Marquee>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        architecto, cum delectus eaque eligendi eos est eveniet explicabo fugiat
        laboriosam magnam neque.
      </Marquee>
      <MerchPromo />
      <Footer />
    </div>
  );
};

export default Home;
