import pic1 from "../../assets/slider/Baryonyx.png";
import pic2 from "../../assets/slider/Triceratops.png";
import pic3 from "../../assets/slider/Velociraptor.png";
import pic4 from "../../assets/slider/Stegosaurus.png";
import pic5 from "../../assets/slider/Pachycephalosaurus.png";
import pic6 from "../../assets/slider/Pachycephalosaurus-2.png";
import pic7 from "../../assets/slider/Pachycephalosaurus-3.png";
import pic8 from "../../assets/slider/Pachycephalosaurus-4.png";
import pic9 from "../../assets/slider/Pachycephalosaurus-5.png";
import pic10 from "../../assets/slider/Pachycephalosaurus-6.png";
import pic11 from "../../assets/slider/Pachycephalosaurus-7.png";
import pic12 from "../../assets/slider/Pachycephalosaurus-8.png";
import pic13 from "../../assets/slider/Pachycephalosaurus-9.png";
import pic14 from "../../assets/slider/Pachycephalosaurus-10.png";
import pic15 from "../../assets/slider/Pachycephalosaurus-11.png";
import pic16 from "../../assets/slider/Pachycephalosaurus-12.png";
import pic17 from "../../assets/slider/Pachycephalosaurus-13.png";
import pic18 from "../../assets/slider/Pachycephalosaurus-14.png";
import pic19 from "../../assets/slider/Pachycephalosaurus-15.png";
import pic20 from "../../assets/slider/Pachycephalosaurus-16.png";
import bg from "../../assets/slider/bg.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import PopupMinting from "../popup";

const data = [
  {
    name: "Velociraptor",
    image: pic1,
  },
  {
    name: "Dimorphodon",
    image: pic2,
  },
  {
    name: "Apatosaurus",
    image: pic3,
  },
  {
    name: "Pteranodon",
    image: pic4,
  },
  {
    name: "Stegosaurus",
    image: pic5,
  },
  {
    name: "Triceratops",
    image: pic6,
  },
  {
    name: "Ankylosaurus",
    image: pic7,
  },
  {
    name: "Ankylosaurus",
    image: pic8,
  },
  {
    name: "Baryonyx",
    image: pic9,
  },
  {
    name: "Carnotaurus",
    image: pic10,
  },
  {
    name: "Dilophosaurus",
    image: pic11,
  },
  {
    name: "Indominus rex",
    image: pic12,
  },
  {
    name: "Indominus rex",
    image: pic13,
  },
  {
    name: "Mosasaurus",
    image: pic14,
  },
  {
    name: "Nodosaurus",
    image: pic15,
  },
  {
    name: "Pachycephalosaurus",
    image: pic16,
  },
  {
    name: "Spinosaurus",
    image: pic17,
  },
  {
    name: "Pachycephalosaurus",
    image: pic17,
  },
  {
    name: "Tylosaurus",
    image: pic18,
  },
  {
    name: "Xrosus",
    image: pic19,
  },
  {
    name: "Pachycephalosaurus",
    image: pic20,
  },
];

const Slider = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [popupMinting, setPopupMinting] = useState(false);
  const [width, setWidth] = useState(1024);

  useEffect(() => {
    if (width < 1024) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }, [width]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingBottom: "100px",
        }}
      >
        <div className="cursor-pointer select-none">
          <Swiper
            slidesPerView={isDesktop ? 3 : 1}
            spaceBetween={100}
            loop={true}
            centeredSlides={true}
            speed={1200}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-end">
                  <div className="w-[200px] h-[200px] flex items-end">
                    <img src={item.image} />
                  </div>
                  <div>
                    <p className="text-white text-left font-bold text-[16px]">
                      {item.name}
                    </p>
                    <div className="flex items-center border border-1 border-l-0 pt-[20px] rounded-r-[20px]  rounded-br-[20px] px-5">
                      <button
                        onClick={() => setPopupMinting(!popupMinting)}
                        className="flex items-center justify-center text-[15px] p-[12px] w-[151px] h-[40px] leading-[24px] mb-5"
                      >
                        Random Minting
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <PopupMinting
      walletAddress={walletAddress}
        popupMinting={popupMinting}
        setPopupMinting={setPopupMinting}
      />
    </>
  );
};

export default Slider;
