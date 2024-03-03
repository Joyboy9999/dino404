import logo from "../../../src/assets/logo.png";
import homeIcon from "../../../src/assets/icon-home.png";
import aboutUsIcon from "../../../src/assets/icon-about-us.png";
import roadmapIcon from "../../../src/assets/icon-roadmap.png";
import bridgeIcon from "../../../src/assets/icon-bridge.png";
import walletIcon from "../../../src/assets/wallet.svg";

import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const Header = ({ setWalletAddress }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [wallet, setWallet] = useState("")


  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setIsScroll(false);
    } else if (window.scrollY > 70) {
      return setIsScroll(true);
    }
  };

  const handleShowMenu = () => {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      setShowMenu(false);
    } else {
      x.style.display = "block";
      setShowMenu(true);
    }
  };

  const updateFrontend = (account) => {
    const shortAddress = account.slice(0, 5) + "..." + account.slice(-6);
    setWallet(shortAddress); // use the setWallet prop (if you want to use it in other components
    setWalletAddress(account); // use the setWalletAddress prop
  };

  async function connectMM() {
    await switchToLinea();
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    updateFrontend(account);
    return account;
  }

  async function switchToLinea() {
    const chainId = "0xe704"; // mainnet 0xe708
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: chainId,
                chainName: "Linea",
                nativeCurrency: {
                  name: "Linea Ether",
                  symbol: "ETH",
                  decimals: 18,
                },
                rpcUrls: ["https://59144.rpc.thirdweb.com"],
                blockExplorerUrls: ["https://linea.build"],
              },
            ],
          });
        } catch (addError) {
          console.error("Failed to add Linea chain", addError);
        }
      } else {
        console.error("Failed to switch to Linea chain", switchError);
      }
    }
  }

  function checkMM() {
    if (typeof window.ethereum !== "undefined") {
      console.log("Metamask is installed!");
    } else {
      console.log("You have not installed Metamask");
    }
  }

  function listenForAccountChanges() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", function (accounts) {
        if (accounts.length > 0) {
          updateFrontend(accounts[0]);
        } else {
          setWalletAddress("");
        }
      });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    checkMM();
    listenForAccountChanges();

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      className="fixed w-full top-0 left-0 z-[999] border-b-[1px] border-[#424e7f]"
      style={{
        transition: "all 0.4s ease",
        backgroundColor: isScroll ? "#03011d" : "transparent",
      }}
    >
      <div className="relative">
        <div className="relative max-w-7xl flex justify-between items-center mx-auto h-[64px]">
          <div className="inline-block">
            <a href="/" className="cursor-pointer">
              <img
                className="w-[150px] sm:w-[200px] lg:w-[264.66px]"
                src={logo}
              />
            </a>
          </div>
          <div>
            <ul className="hidden gap-[32px] text-[20px] xs:text-[15px] xl:flex font-extrabold">
              <li className=" h-full gap-2 cursor-pointer hover:text-blue-500">
                <a href="#home" className="flex items-center">
                  <img className="mr-2" src={homeIcon} />
                    <span>Home</span>
                </a>
              </li>
              <li className="h-full gap-2 cursor-pointer hover:text-blue-500">
                <a href="#about" className="flex items-center">
                  <img className="mr-2" src={aboutUsIcon} />
                  <span>About Us</span>
                </a>
              </li>
              <li className="h-full gap-2 cursor-pointer hover:text-blue-500">
                <a href="#roadmap" className="flex items-center">
                  <img className="mr-2" src={roadmapIcon} />
                  <span>Roadmap</span>
                </a>
              </li>
              <li className="h-full gap-2 cursor-pointer hover:text-blue-500">
                <a href="#bridge" className="flex items-center">
                  <img className="mr-2" src={bridgeIcon} />
                  <span>Bridge</span>
                </a>
              </li>
            </ul>
            <div className="xl:hidden">
              <button
                className="!px-[12px] py-[10px] font-extrabold flex mr-3"
                onClick={handleShowMenu}
              >
                <img className="w-[22px] h-[22px] sm:mr-[8px]" src={walletIcon} />
                <span className="hidden sm:inline-block">
                  {wallet ? wallet : "Connect Wallet"}
                </span>
              </button>
              <div
                id="myLinks"
                className={`${
                  showMenu ? "block" : "hidden"
                } absolute top-14 right-0 bg-[#03011d] border-[1px] border-[#424e7f] rounded-b-[4px]`}
              >
                <a href="#home" className="block py-2 px-4 cursor-pointer">
                  Home
                </a>
                <a href="#about" className="block py-2 px-4 cursor-pointer">
                  About Us
                </a>
                <a href="#roadmap" className="block py-2 px-4 cursor-pointer">
                  Roadmap
                </a>
                <a href="#bridge" className="block py-2 px-4 cursor-pointer">
                  Bridge
                </a>
              </div>
            </div>
          </div>
          <div className="hidden xl:block">
            <button
              id="connectWalletBtn"
              className="!px-[12px] py-[10px] font-extrabold flex mr-3"
              onClick={connectMM}
            >
              <img className="w-[22px] h-[22px] sm:mr-[8px]" src={walletIcon} />
              <span className="hidden sm:inline-block">
                {wallet ? wallet : "Connect Wallet"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;