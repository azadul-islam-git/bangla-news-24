import Image from "next/image";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative mx-auto max-w-7xl px-4 py-4">
      <div className="grid grid-cols-3 items-center mb-2 mt-1">
        {/* Left spacer - keeps the logo/title centered */}
        <div />

        {/* Logo + title + date - exact center */}
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/logo.webp"
            alt="logo"
            height={50}
            width={50}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg"
          />

          <div className="leading-tight">
            <h1 className="font-serif font-bold text-red-700 text-base sm:text-xl md:text-3xl whitespace-nowrap">
              Bangla News 24
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">
              {date}
            </p>
          </div>
        </div>

        {/* Buttons - right side */}
        <div className="flex items-center justify-end gap-4">
          <button className="text-gray-800 cursor-pointer text-xs sm:text-sm hover:text-red-700 transition">
            সাইন ইন
          </button>

          <button className="bg-red-700 text-white font-bold px-3 py-1.5 rounded-md hover:bg-red-800 transition cursor-pointer text-xs sm:text-sm">
            সাইন আপ
          </button>
        </div>
      </div>

      <Navlinks />
    </header>
  );
};

export default Header;
