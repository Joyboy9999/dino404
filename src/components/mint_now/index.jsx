import Pic1 from "../../assets/mint-now/pic1.png";
import Pic2 from "../../assets/mint-now/pic2.png";
import Pic3 from "../../assets/mint-now/pic3.png";
import bg from '../../assets/mint-now/bg.png'
import PopupMinting from "../popup";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MintNow = ({walletAddress}) => {
  const [popupMinting, setPopupMinting] = useState(false);

  const listItem = [
    {
      title: "Mint NFT",
      img: Pic1,
      content:
        "As an early contributor, users will have the privilege of gaining access to our exclusive collection of OG NFTs. Additionally, Dino404 will soon be launching an extraordinary initiative that allows users to participate in the free NFT minting process to acquire unique dinosaur eggs.",
    },
    {
      title: "Play to earn",
      img: Pic2,
      content:
        "A Land-based Metaverse in which players can create their own characters. Unleash the full potential of majestic dinosaurs by providing them with top-notch care, forging new alliances, and engaging in thrilling in-game battles to expedite their evolution, games, quests, etc",
    },
    {
      title: "Metaverse",
      img: Pic3,
      content:
        "Combining cutting-edge technology will give you an authentic and immersive experience in the world of amazing dinosaurs.",
    },
  ];

  return (
    <div
      className="w-full h-full "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: 'cover'
      }}
    >
      <div className="lg:max-w-7xl px-4 lg:px-0 mx-auto">
        <div className="flex flex-col gap-[32px]">
          <div className="flex justify-center">
            <button
                                    onClick={() => setPopupMinting(!popupMinting)}

              style={{
                fontWeight: "800",
                padding: "20px 0px",
                borderRadius: "8px",
                lineHeight: "24px",
              }}
              className="bg-[#7C9B7C] w-[280px] lg:text-[40px] text-[32px] lg:w-[380px] flex justify-center items-center opacity-90 hover:opacity-100 border-none transition-all active:opacity-80 active:border-none"
            >
              Mint Now
            </button>
          </div>

          <div className="flex lg:flex-row flex-col gap-[40px] lg:gap-[23px] justify-center items-center">
            {listItem.map((item, index) => (
              <div
                style={{ borderRadius: "16px" }}
                className="w-[380px] bg-[#1A1A1A] overflow-hidden p-1.5 lg:h-[562px] h-[580px] "
                key={index}
              >
                <div className="h-[210px]">
                  <img
                    className="h-full w-full"
                    src={item.img}
                    alt={`pic-${index}`}
                  />
                </div>
                <h4
                  className="text-center pt-3 pb-2"
                  style={{
                    fontWeight: "800",
                    fontSize: "24px",
                    lineHeight: "32px",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "32px",
                    letterSpacing: "-0.005em",
                    alignSelf: "stretch",
                    textAlign: "justify",
                  }}
                  className="px-4 text-[#B9BDD1] pt-2 pb-4 lg:pt-0 lg:pb-0"
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PopupMinting
        walletAddress={walletAddress}
        popupMinting={popupMinting}
        setPopupMinting={setPopupMinting}
      />
    </div>
  );
};

export default MintNow;
