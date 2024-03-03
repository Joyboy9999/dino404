const JoinUs = () => {
  return (
    <div className="h-[300px] w-full flex justify-center join-us">
      <div className="lg:max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex justify-center items-center h-full flex-col gap-3">
          <h4
            style={{ fontWeight: "800", lineHeight: "44px" }}
            className="lg:text-[55px] text-[40px] text-center"
          >
            Join DINO 404 Community
          </h4>
          <p
            style={{
              fontWeight: "400",
              lineHeight: "22px",
              letterSpacing: "-0.005em",
            }}
            className="lg:text-[20px] text-[16px]  text-center"
          >
            Be part of our amazing community and stay tuned for any news.
          </p>

          <button
            style={{
              fontWeight: "800",
              padding: "12px 0px",
              borderRadius: "8px",
              lineHeight: "24px",
            }}
            className="bg-[#7C9B7C] mt-3 w-[280px] lg:text-[18px] text-[16px] lg:w-[194px] flex justify-center items-center opacity-90 hover:opacity-100 border-none transition-all active:opacity-80 active:border-none"
          >
            Join us now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
