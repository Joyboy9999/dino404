import AboutUs from "./components/about_us";
import Footer from "./components/footer";
import Header from "./components/header";
import Intro from "./components/intro";
import JoinUs from "./components/join_us";
import MintNow from "./components/mint_now";
import RoadMap from "./components/roadmap";
import Slider from "./components/slider";
import {useState } from "react";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  
  return (
    <>
      <div className="w-screen max-w-full">
        <div id="home" className="min-h-full min-w-full bg-cover relative">
          <Header setWalletAddress={setWalletAddress} />
          <Intro walletAddress={walletAddress} />
          <Slider walletAddress={walletAddress}/>
        </div>

        <div id="about-us">
          <div className="sm:h-[900px] h-[1043px] lg:h-[800px] ">
            <AboutUs />
          </div>
          <MintNow walletAddress={walletAddress}/>
        </div>

        <div id="roadmap">
          <RoadMap />
        </div>

        <JoinUs />

        <Footer />
      </div>
    </>
  );
}

export default App;
