import Discord from "../../assets/discord.png";
import Twitter from "../../assets/twitter.png";
import Site from "../../assets/site_logo.png";

const Footer = () => {
  const listInfo = [
    {
      title: "Whitepaper",
    },
    {
      title: "Terms of Use",
    },
    {
      title: "News & Updates",
    },
    {
      title: "Our Partners",
    },
  ];

  const listInfo2 = [
    {
      title: "Tokenomics & allocation",
    },
    {
      title: "Launch contribution",
    },
  ];

  return (
    <div className="lg:max-w-7xl mx-auto px-4 lg:px-0 xl:px-6 2xl:px-0">
      <div
        style={{
          borderBottom: "1px solid #22336d",
        }}
        className="flex gap-4 lg:gap-0 flex-col lg:flex-row justify-center lg:justify-between py-10"
      >
        <div className="flex-col gap-[16px] hidden lg:flex">
          <div className="flex gap-[40px]">
            {listInfo.map((item, index) => (
              <div key={index}>
                <span
                  style={{ fontWeight: "600", lineHeight: "24px" }}
                  className="text-[16px] "
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-[40px]">
            {listInfo2.map((item, index) => (
              <div key={index}>
                <span
                  style={{ fontWeight: "600", lineHeight: "24px" }}
                  className="text-[16px] "
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 justify-center gap-x-6 px-4">
          {listInfo.concat(listInfo2).map((item, index) => (
            <div key={index}>
              <span
                style={{ fontWeight: "600", lineHeight: "24px" }}
                className="text-[14px]"
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <span
            style={{
              fontWeight: "400",
              lineHeight: "22px",
              letterSpacing: "-0.005em",
            }}
            className="text-[14px] text-[#8C93B2] text-center"
          >
            Follow us on
          </span>

          <div className="flex gap-2 justify-center">
              <a target="_blank" href="https://twitter.com/linea_erc404">
              <img src={Twitter} alt="" />

              </a>
              <a target="_blank" href="https://discord.gg/QgfdFXnN">
              <img src={Discord} alt="" />

              </a>
          </div>
        </div>
      </div>

      <div className="py-5 flex flex-col lg:flex-row justify-between ">
        <div className="flex items-center justify-center lg:justify-start">
          <p className="mr-2.5 mt-1.5 text-[14px]">Build on</p>
          <img src={Site} alt="" />
        </div>

        <div>
          <p
            style={{ letterSpacing: "-0.005em" }}
            className="text-[14px] text-[#8C93B2] text-center lg:text-start"
          >
            Copyright © 2024 Dino. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
