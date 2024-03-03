import groupImg from "../../assets/group_img.png";
import checkedImg from "../../assets/checked.png";
import ethImg from "../../assets/eth.png";
import bg from "../../assets/header/bg.png";
import { useState } from "react";
import PopupMinting from "../popup";

const Intro = ({ walletAddress }) => {
  const [popupMinting, setPopupMinting] = useState(false);
  return (
    <section
    className="px-0 xl:px-6 2xl:px-0"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-[9] max-w-4xl xl:max-w-7xl mx-[30px] sm:mx-auto flex flex-col lg:flex-row justify-center xl:justify-between items-center py-[70px] min-h-[850px] h-[50%] sm:h-[80%] lg:h-[80%] xl:h-[100%]">
        <div className="text-white text-center lg:text-left">
          <h1 className="font-bold text-[36px] xl:text-[64px] mb-[30px]">
            DINO 404
          </h1>
          <h3 className="text-[16px] font-normal mb-[20px]">
            The first NFT ERC404 for Early Contributors on the Linea
          </h3>
          <h3 className="text-[16px] font-normal mb-[20px]">
            <br />
            You will be eligible to mint an OG NFT if your wallet meets one of
            the
            <br />
            following conditions:
          </h3>
          <h3 className="font-normal mb-[20px]">
            <img src={checkedImg} className="mr-[10px] inline-block" />
            <span>Whitelist</span>
            <br />
            <img src={checkedImg} className="mr-[10px] inline-block" />
            <span>Linea Voyage NFT holders</span>
          </h3>

          <button
            onClick={() => setPopupMinting(!popupMinting)}
            className="w-[198px]"
          >
            Minting
          </button>

          <h3 className="font-normal mt-[25px]">
            <span>Max 01 NFT Per Wallet.</span>
            <br />
            <span className="flex items-center justify-center lg:justify-start">
              Price:
              <span className="flex items-center">
                <img src={ethImg} className="ml-2 mr-1 inline-block" />
                <span>0.0018</span>
              </span>
            </span>
          </h3>
        </div>
        <div className="hidden sm:block max-w-[350px] lg:max-w-full">
          <img src={groupImg} />
        </div>
      </div>

      <PopupMinting walletAddress={walletAddress} popupMinting={popupMinting} setPopupMinting={setPopupMinting}/>
    
    </section>
  );
};

export default Intro;
