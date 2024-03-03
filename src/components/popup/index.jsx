import Collext13 from "../../assets/collect_13.png";
import Ethe from "../../assets/ethe.png";
import Delete from "../../assets/svgs/delete.svg";

// eslint-disable-next-line react/prop-types
const PopupMinting = ({walletAddress, popupMinting, setPopupMinting }) => {
  const handleContentClick = (e) => {
    // Ngăn chặn sự kiện click từ việc lan rộng ra nền đen
    e.stopPropagation();
  };
  function mint(wallet) {
    console.log(wallet);
  } 
  
  return (
    <>
      {popupMinting && (
        <div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              backgroundColor: "rgba(6, 24, 44, 0.9)",
              width: "100vw",
              height: "100vh",
              zIndex: 999,
              overflow: "auto",
            }}
            onClick={() => setPopupMinting(false)}
          >
            <div
              style={{
                padding: "2% 20px 30px",
              }}
            >
              <div
                style={{
                  maxWidth: "500px",
                  width: "100%",
                  margin: "auto",
                  position: "relative",
                }}
                onClick={handleContentClick}
              >
                <div>
                  <button
                    onClick={() => setPopupMinting(false)}
                    className="flex justify-center items-center hover:opacity-80 active:opacity-100"
                    style={{
                      zIndex: "9",
                      border: "none",
                      height: "32px",
                      width: "32px",
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      backgroundColor: "#06182c",
                      padding: "0",
                    }}
                  >
                    <img src={Delete} alt="" />
                  </button>
                </div>
                <div
                  style={{
                    backgroundColor: "#1a1a1a",
                    padding: "50px",
                    borderRadius: "10px",
                    opacity: "0.9",
                  }}
                >
                  <h2 className="text-white text-[22px] text-center">
                    MINT YOUR NFT
                  </h2>
                  <div className="pt-6 pb-10">
                    <img
                      className="w-[60%] h-[60%] mx-auto"
                      style={{ borderRadius: "10px" }}
                      src={Collext13}
                      alt=""
                    />
                  </div>

                  <ul
                    style={{ fontWeight: "600", fontSize: "16px" }}
                    className="text-white pb-8 space-y-4"
                  >
                    <li className="flex justify-between">
                      <div>Total supply:</div>
                      <div>5555 NFTs</div>
                    </li>

                    <li className="flex justify-between items-center">
                      <div>Quantity:</div>
                      <div>
                        1 NFT
                        {/* <div
                          className="flex justify-between items-center lg:w-[150px] w-[110px]"
                          style={{
                            border: "1px solid #eaeaea",
                            height: "45px",
                            borderRadius: "5px",
                            padding: "0 16px",
                          }}
                        >
                          <button
                            className="hover:opacity-80 duration-200 active:opacity-100 w-[28px] h-[24px]"
                            style={{
                              outline: "none",
                              padding: "0",
                              fontSize: "24px",
                              backgroundColor: "transparent",
                            }}
                          >
                            <img className="h-full w-full" src={Minus} alt="" />
                          </button>
                          <input
                            style={{
                              width: "40px",
                              textAlign: "center",
                              border: "none",
                              backpgroundColor: "transparent",
                              outline: "none",
                            }}
                            type="text"
                            value="1 NFT"
                          />
                          <button
                            className="hover:opacity-80 duration-200 active:opacity-100 w-[24px] h-[24px]"
                            style={{
                              outline: "none",
                              padding: "0",
                              fontSize: "24px",
                              backgroundColor: "transparent",
                            }}
                          >
                            <img className="w-full h-full" src={Plus} alt="" />
                          </button>
                        </div> */}
                      </div>
                    </li>

                    <li className="flex justify-between items-center">
                      <div>Price:</div>
                      <div>
                        <span className="flex gap-2 items-center">
                          <img src={Ethe} alt="" />
                          0.0018
                        </span>
                      </div>
                    </li>
                  </ul>
                  <button
                     onClick={() => mint(walletAddress)}
                    style={{
                      fontWeight: "600",
                      padding: "12px 0px",
                      borderRadius: "8px",
                      lineHeight: "24px",
                    }}
                    className="bg-[#7C9B7C] text-white uppercase text-[18px] w-full flex justify-center items-center opacity-90 hover:opacity-100 border-none transition-all active:opacity-80 active:border-none"
                  >
                    Mint Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupMinting;
