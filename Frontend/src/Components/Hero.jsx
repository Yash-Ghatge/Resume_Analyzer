const Hero = () => {
  return (
    <>
      <style>
        {`
            
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

                * {
                    font-family: "Poppins", sans-serif;
                }`}
      </style>
      <section className="flex flex-col items-center text-white px-4 pb-10">
        <nav className="flex items-center justify-between py-3 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full">
          <a href="">
            <h1 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent tracking-wide">
              ResumeAI
            </h1>
          </a>
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
            <svg
              className="w-6 h-6 text-white opacity-90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
            </svg>
          </div>
        </nav>

        <div className="flex items-center mt-32 mx-auto lg:mx-0">
          <div className="flex -space-x-3 pr-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1"
            />
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="user1"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="user2"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-3"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-4"
            />
          </div>

          <div>
            <div className="flex ">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star text-transparent fill-[#FF8F20]"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                ))}
            </div>
            <p className="text-xs text-gray-200">Used by 10,000+ users</p>
          </div>
        </div>

        <h1 className="text-[42px]/13 md:text-6xl/19 font-semibold text-center max-w-[840px] mt-4 bg-linear-to-r from-white to-[#5D009F] text-transparent bg-clip-text">
          Transform Your Resume Into Opportunity
        </h1>
        <p className="text-gray-200 text-sm max-md:px-2 text-center max-w-sm mt-3">
          Unlock the perfect tools for skill analysis, career insights, and
          more.
        </p>
      </section>
    </>
  );
};

export default Hero;
