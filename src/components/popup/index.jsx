import { useCallback, useState } from "react";
import Collext13 from "../../assets/collect_13.png";
import Ethe from "../../assets/ethe.png";
import Delete from "../../assets/svgs/delete.svg";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const tokenAddress = "0x66b8f72efd8532cd918047be818fec6c9efba3ea";
const tokenABI = [
  {
    inputs: [
      { internalType: "string", name: "name_", type: "string" },
      { internalType: "string", name: "symbol_", type: "string" },
      { internalType: "uint8", name: "decimals_", type: "uint8" },
      { internalType: "address", name: "initialOwner_", type: "address" },
      { internalType: "uint256", name: "maxMint_", type: "uint256" },
      { internalType: "address", name: "_recipient", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "AlreadyExists", type: "error" },
  { inputs: [], name: "DecimalsTooLow", type: "error" },
  { inputs: [], name: "InsufficientAllowance", type: "error" },
  { inputs: [], name: "InvalidApproval", type: "error" },
  { inputs: [], name: "InvalidExemption", type: "error" },
  { inputs: [], name: "InvalidOperator", type: "error" },
  { inputs: [], name: "InvalidRecipient", type: "error" },
  { inputs: [], name: "InvalidSender", type: "error" },
  { inputs: [], name: "InvalidSigner", type: "error" },
  { inputs: [], name: "InvalidSpender", type: "error" },
  { inputs: [], name: "InvalidTokenId", type: "error" },
  { inputs: [], name: "MintLimitReached", type: "error" },
  { inputs: [], name: "NotFound", type: "error" },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "OwnedIndexOverflow", type: "error" },
  { inputs: [], name: "PermitDeadlineExpired", type: "error" },
  { inputs: [], name: "QueueEmpty", type: "error" },
  { inputs: [], name: "QueueFull", type: "error" },
  { inputs: [], name: "QueueOutOfBounds", type: "error" },
  { inputs: [], name: "RecipientIsERC721TransferExempt", type: "error" },
  { inputs: [], name: "Unauthorized", type: "error" },
  { inputs: [], name: "UnsafeRecipient", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "WhitelistAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "WhitelistRemoved",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ID_ENCODING_PREFIX",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_MINT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VOYAGE",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "addresses", type: "address[]" },
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender_", type: "address" },
      { internalType: "uint256", name: "valueOrId_", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender_", type: "address" },
      { internalType: "uint256", name: "value_", type: "uint256" },
    ],
    name: "erc20Approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner_", type: "address" }],
    name: "erc20BalanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20TotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from_", type: "address" },
      { internalType: "address", name: "to_", type: "address" },
      { internalType: "uint256", name: "value_", type: "uint256" },
    ],
    name: "erc20TransferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender_", type: "address" },
      { internalType: "uint256", name: "id_", type: "uint256" },
    ],
    name: "erc721Approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner_", type: "address" }],
    name: "erc721BalanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc721TotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "target_", type: "address" }],
    name: "erc721TransferExempt",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from_", type: "address" },
      { internalType: "address", name: "to_", type: "address" },
      { internalType: "uint256", name: "id_", type: "uint256" },
    ],
    name: "erc721TransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getERC721QueueLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "start_", type: "uint256" },
      { internalType: "uint256", name: "count_", type: "uint256" },
    ],
    name: "getERC721TokensInQueue",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasVoyageNft",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintERC20",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "minted",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner_", type: "address" }],
    name: "owned",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "id_", type: "uint256" }],
    name: "ownerOf",
    outputs: [
      { internalType: "address", name: "erc721Owner", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner_", type: "address" },
      { internalType: "address", name: "spender_", type: "address" },
      { internalType: "uint256", name: "value_", type: "uint256" },
      { internalType: "uint256", name: "deadline_", type: "uint256" },
      { internalType: "uint8", name: "v_", type: "uint8" },
      { internalType: "bytes32", name: "r_", type: "bytes32" },
      { internalType: "bytes32", name: "s_", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "recipient",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "addresses", type: "address[]" },
    ],
    name: "removeFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from_", type: "address" },
      { internalType: "address", name: "to_", type: "address" },
      { internalType: "uint256", name: "id_", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from_", type: "address" },
      { internalType: "address", name: "to_", type: "address" },
      { internalType: "uint256", name: "id_", type: "uint256" },
      { internalType: "bytes", name: "data_", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator_", type: "address" },
      { internalType: "bool", name: "approved_", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account_", type: "address" },
      { internalType: "bool", name: "value_", type: "bool" },
    ],
    name: "setERC721TransferExempt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "state_", type: "bool" }],
    name: "setSelfERC721TransferExempt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "id_", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to_", type: "address" },
      { internalType: "uint256", name: "value_", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from_", type: "address" },
      { internalType: "address", name: "to_", type: "address" },
      { internalType: "uint256", name: "valueOrId_", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "units",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_newAmount", type: "uint256" }],
    name: "updateTransferAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "whitelist",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];

async function mint(wallet) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(tokenAddress, tokenABI, provider);

  const checkwl = await contract.whitelist(wallet);
  if (checkwl) {
    try {
      const signer = provider.getSigner();
      const ContractWithSigner = contract.connect(signer);
      const tokenAmountInEther = ethers.utils.parseEther("0.0018");

      const gasLimit = ethers.BigNumber.from(200000);

      const transaction = await ContractWithSigner.mintERC20({
        value: tokenAmountInEther,
        gasLimit,
      });
      await transaction.wait();

      console.log("Mint transaction successful");
      /// Hiệu ứng ở đây
      toast.success("Mint transaction successful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Failed to mint tokens:", error);
      /// Hiệu ứng ở đây
      toast.error(`Failed to mint tokens: ${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  } else {
    console.log("You are not whitelist");
    /// Hiệu ứng ở đây
    toast.error(`You are not whitelist`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}
// eslint-disable-next-line react/prop-types
const PopupMinting = ({ walletAddress, popupMinting, setPopupMinting }) => {
  const [canMint, setCanMint] = useState(false)
  const handleContentClick = (e) => {
    // Ngăn chặn sự kiện click từ việc lan rộng ra nền đen
    e.stopPropagation();
  };

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(tokenAddress, tokenABI, provider);
  contract
    .whitelist(walletAddress)

    .then((checkwl) => {
      if (checkwl) {
        console.log("You can mint");
        setCanMint(true)
      } else {
        console.log("You are not Eligible")
        setCanMint(false)
      }
    });

  const handleButtonMint = useCallback(() => {
    if (!walletAddress) {
      setPopupMinting(false);
      toast.error(`You haven't connected to the wallet yet`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (walletAddress) {
      mint(walletAddress);
    }
  }, [walletAddress, setPopupMinting]);

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
                    onClick={handleButtonMint}
                    disabled={walletAddress && !canMint}
                    style={{
                      fontWeight: "600",
                      padding: "12px 0px",
                      borderRadius: "8px",
                      lineHeight: "24px",
                    }}
                    className={`${(!walletAddress ? "bg-[#7C9B7C] text-white opacity-90 hover:opacity-100 border-none transition-all active:opacity-80" : canMint ? "bg-[#7C9B7C] text-white opacity-90 hover:opacity-100 border-none transition-all active:opacity-80" : "bg-gray-400 text-gray-600 hover:bg-gray-400 cursor-not-allowed")}  uppercase text-[18px] w-full flex justify-center items-center  active:border-none`}
                  >
                    {!walletAddress ? "Mint now" : canMint ? "Mint now" : "You are not Eligible"}
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
