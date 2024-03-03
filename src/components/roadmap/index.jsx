import Line from "../../assets/roadmap/alien_planets.png";
import Egg1 from "../../assets/roadmap/egg_1.png";
import Egg2 from "../../assets/roadmap/egg_2.png";
import Egg3 from "../../assets/roadmap/egg_3.png";
import Egg4 from "../../assets/roadmap/egg_4.png";
import bg from "../../assets/mint-now/bg.png"

const RoadMap = () => {
  return (
    <div
      className="w-full h-full lg:pb-[240px] pt-44 px-0 xl:px-6 2xl:px-0"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div
        className="lg:max-w-7xl mx-auto px-4 lg:px-0 py-10 pt-10 pb-32"
      >
        <div className="text-center space-y-[8px]">
          <span
            style={{ fontWeight: "800", lineHeight: "28px" }}
            className="text-[#FAB2F1] text-[20px]"
          >
            FEATURED
          </span>
          <h4
            style={{ lineHeight: "64px", fontWeight: "800" }}
            className="text-[#FFFFFF] text-[58px]"
          >
            Roadmap
          </h4>
        </div>
        <div className="hidden lg:inline-block">
          <div className="relative text-[#B9BDD1] h-[500px] py-20">
            <div
              style={{
                background: "linear-gradient(0, #000, #fff)",
                borderRadius: "20px",
              }}
              className="relative h-[228px] min-w-[300px] w-[25%]"
            >
              <div
                style={{ borderRadius: "18px" }}
                className="absolute bg-black w-[99%] h-[98%] left-[1.5px] top-[2.5px]"
              >
                <div className="w-[92%] m-auto bg-black">
                  <p
                    style={{
                      fontWeight: "800",
                      lineHeight: "36px",
                      borderRadius: "8px",
                    }}
                    className="bg-[#762AC2] text-[#FFFFFF] text-[24px] text-center mt-[12px] opacity-90 hover:opacity-100 transition-all active:opacity-80"
                  >
                    Phase 1
                  </p>

                  <div className="pt-1.5 text-[#B9BDD1]">
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - Launch OG NFT Collection
                    </p>
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - The team plans to expand the virtual world, introducing
                      new environments, quests, and challenges for players to
                      explore
                    </p>
                  </div>
                </div>
              </div>

              <img
                style={{ transform: "translate(-50%)" }}
                className="absolute top-[88%] left-[50%] z-10"
                src={Egg1}
                alt="egg1"
              />
            </div>

            <div
              style={{
                background: "linear-gradient(0, #000, #fff)",
                borderRadius: "20px",
              }}
              className="absolute left-[calc(21%)] -bottom-[215px] h-[228px] min-w-[300px] w-[25%]"
            >
              <div
                style={{ borderRadius: "18px" }}
                className="absolute bg-black w-[99%] h-[98%] left-[1.5px] top-[2.5px]"
              >
                <div className="w-[92%] m-auto bg-black">
                  <p
                    style={{
                      fontWeight: "800",
                      lineHeight: "36px",
                      borderRadius: "8px",
                    }}
                    className="bg-[#3C7C24] text-[#FFFFFF] text-[24px] text-center mt-[12px] opacity-90 hover:opacity-100 transition-all active:opacity-80"
                  >
                    Phase 2
                  </p>

                  <div className="pt-1.5 text-[#B9BDD1]">
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - Free Mint unique dinosaur eggs
                    </p>
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - Blockchain Game version 1 (basic features)
                    </p>
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - Activity for top leaderboard
                    </p>
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - The point-earning mechanism
                    </p>
                  </div>
                </div>
              </div>

              <img
                style={{ transform: "translate(-50%)" }}
                className="absolute -top-[170px] left-[50%] z-10"
                src={Egg2}
                alt="egg1"
              />
            </div>

            <div
              style={{
                background: "linear-gradient(0, #000, #fff)",
                borderRadius: "20px",
              }}
              className="absolute right-[27.5%] top-[200px] h-[228px] min-w-[300px] w-[25%]"
            >
              <div
                style={{ borderRadius: "18px" }}
                className="absolute bg-black w-[99%] h-[98%] left-[1.5px] top-[2.5px]"
              >
                <div className="w-[92%] m-auto bg-black">
                  <p
                    style={{
                      fontWeight: "800",
                      lineHeight: "36px",
                      borderRadius: "8px",
                    }}
                    className="bg-[#F19121] text-[#FFFFFF] text-[24px] text-center mt-[12px] opacity-90 hover:opacity-100 transition-all active:opacity-80"
                  >
                    Phase 3
                  </p>

                  <div className="pt-1.5 text-[#B9BDD1]">
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - Blockchain Game version 2 (upgraded features)
                    </p>
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - Airdrop for Community
                    </p>
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - Launch token $DINO
                    </p>
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - Listed on Cex/Dex
                    </p>
                  </div>
                </div>
              </div>

              <img
                style={{ transform: "translate(-50%)" }}
                className="absolute top-[90%] left-[50%] z-10"
                src={Egg3}
                alt="egg1"
              />
            </div>

            <div
              style={{
                background: "linear-gradient(0, #000, #fff)",
                borderRadius: "20px",
              }}
              className="absolute right-0 bottom-[-170px] h-[164px] min-w-[300px] w-[25%]"
            >
              <div
                style={{ borderRadius: "18px" }}
                className="absolute bg-black w-[99%] h-[98%] left-[1.5px] top-[2.5px]"
              >
                <div className="w-[92%] m-auto bg-black">
                  <p
                    style={{
                      fontWeight: "800",
                      lineHeight: "36px",
                      borderRadius: "8px",
                    }}
                    className="bg-[#F440BC] text-[#FFFFFF] text-[24px] text-center mt-[12px] opacity-90 hover:opacity-100 transition-all active:opacity-80"
                  >
                    Phase 4
                  </p>

                  <div className="pt-1.5 text-[#B9BDD1]">
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - The token-earning mechanism
                    </p>
                    <p
                      style={{
                        letterSpacing: "-0.005em",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      - Integrating Metaverse into the game
                    </p>
                  </div>
                </div>
              </div>

              <img
                style={{ transform: "translate(-50%)" }}
                className="absolute -top-[176px] left-[50%] z-10"
                src={Egg4}
                alt="egg1"
              />
            </div>

            <div className="mt-[64px]">
              <div className="h-[167px] w-full relative">
                <img src={Line} alt="line" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden py-10">
          <div className="roadmap flex flex-col gap-y-20">
            <div className="flex">
              <div className="flex-1 mx-auto flex justify-center items-center">
                <img className="" src={Egg1} alt="egg1" />
              </div>

              <div
                style={{
                  background: "linear-gradient(0, #000, #fff)",
                  borderRadius: "20px",
                }}
                className="relative h-[265px] w-[60%]"
              >
                <div
                  style={{ borderRadius: "18px" }}
                  className="absolute bg-black w-[99%] h-[98%] left-[1.5px] top-[2.5px]"
                >
                  <div className="w-[92%] m-auto bg-black">
                    <p
                      style={{
                        fontWeight: "800",
                        lineHeight: "36px",
                        borderRadius: "8px",
                      }}
                      className="bg-[#762AC2] text-[#FFFFFF] text-[20px] text-center mt-[12px] opacity-90 hover:opacity-100 transition-all active:opacity-80"
                    >
                      Phase 1
                    </p>

                    <div className="pt-1.5 text-[#B9BDD1]">
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - Launch OG NFT Collection
                      </p>
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - The team plans to expand the virtual world,
                        introducing new environments, quests, and challenges for
                        players to explore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div
                style={{
                  background: "linear-gradient(0, #000, #fff)",
                  borderRadius: "20px",
                }}
                className="relative h-[290px] w-[60%]"
              >
                <div
                  style={{ borderRadius: "18px" }}
                  className="absolute bg-black w-[99%] h-[98%] left-[1.5px] top-[2.5px]"
                >
                  <div className="w-[92%] m-auto bg-black">
                    <p
                      style={{
                        fontWeight: "800",
                        lineHeight: "36px",
                        borderRadius: "8px",
                      }}
                      className="bg-[#3C7C24] text-[#FFFFFF] text-[20px] text-center mt-[12px] opacity-90 hover:opacity-100 transition-all active:opacity-80"
                    >
                      Phase 2
                    </p>

                    <div className="pt-1.5 text-[#B9BDD1]">
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - Free Mint unique dinosaur eggs
                      </p>
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - Blockchain Game version 1 (basic features)
                      </p>
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - Activity for top leaderboard
                      </p>
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - The point-earning mechanism
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 mx-auto flex justify-center items-center">
                <img className=" " src={Egg2} alt="egg1" />
              </div>
            </div>

            <div className="flex">
              <div className="flex-1 mx-auto flex justify-center items-center">
                <img className="" src={Egg3} alt="egg1" />
              </div>
              <div
                style={{
                  background: "linear-gradient(0, #000, #fff)",
                  borderRadius: "20px",
                }}
                className="relative h-[230px] w-[60%]"
              >
                <div
                  style={{ borderRadius: "18px" }}
                  className="absolute bg-black w-[99%] h-[98%] left-[1.5px] top-[2.5px]"
                >
                  <div className="w-[92%] m-auto bg-black">
                    <p
                      style={{
                        fontWeight: "800",
                        lineHeight: "36px",
                        borderRadius: "8px",
                      }}
                      className="bg-[#F19121] text-[#FFFFFF] text-[20px] text-center mt-[12px] opacity-90 hover:opacity-100 transition-all active:opacity-80"
                    >
                      Phase 3
                    </p>

                    <div className="pt-1.5 text-[#B9BDD1]">
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - Blockchain Game version 2 (upgraded features)
                      </p>
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - Airdrop for Community
                      </p>
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - Launch token $DINO
                      </p>
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - Listed on Cex/Dex
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div
                style={{
                  background: "linear-gradient(0, #000, #fff)",
                  borderRadius: "20px",
                }}
                className="relative h-[228px] w-[60%]"
              >
                <div
                  style={{ borderRadius: "18px" }}
                  className="absolute bg-black w-[99%] h-[98%] left-[1.5px] top-[2.5px]"
                >
                  <div className="w-[92%] m-auto bg-black">
                    <p
                      style={{
                        fontWeight: "800",
                        lineHeight: "36px",
                        borderRadius: "8px",
                      }}
                      className="bg-[#F440BC] text-[#FFFFFF] text-[20px] text-center mt-[12px] opacity-90 hover:opacity-100 transition-all active:opacity-80"
                    >
                      Phase 4
                    </p>

                    <div className="pt-1.5 text-[#B9BDD1]">
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - The token-earning mechanism
                      </p>
                      <p
                        style={{
                          letterSpacing: "-0.005em",
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "32px",
                        }}
                      >
                        - Integrating Metaverse into the game
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 mx-auto flex justify-center items-center">
                <img className="" src={Egg4} alt="egg1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
