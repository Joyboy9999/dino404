import aboutUsImg from "../../assets/about-us.png";
import bg from "../../assets/about/about_background.png";

const AboutUs = () => {
  return (
    <div
      className="h-full w-full px-0 xl:px-6 2xl:px-0"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl xl:max-w-7xl mx-[30px] lg:mx-auto h-full">
        <div className="flex flex-col-reverse items-center lg:grid lg:grid-cols-2 lg:gap-[26px] h-[80%] sm:h-[98%] lg:h-[80%] xl:h-[85%]">
          <div>
            <img style={{ borderRadius: "10px" }} src={aboutUsImg} />
          </div>
          <div>
            <h3 className="font-extrabold text-[20px] text-[#fab2f1] mb-[6px] leading-[28px]">
              FEATURED
            </h3>
            <h2 className="text-[60px] mb-[20px] font-extrabold leading-[64px]">
              About Us
            </h2>
            <p className="-tracking-[0.5%] font-normal text-[20px] text-justify">
              Discover a captivating world where dinosaurs have evolved over
              thousands of years in our Blockchain game project on Linea. Engage
              in nurturing and witnessing their growth, and even create new
              dinosaurs through the evolutionary process. With the secure and
              transparent Linea ecosystem, each dinosaur is authenticated and
              uniquely owned, ensuring an immersive and authentic gaming
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
