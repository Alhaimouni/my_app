import BillSVG from "../../svg/BillSVG";
import WebSVG from "../../svg/WebSVG";
import ScreenSVG from "../../svg/ScreenSVG";

function Header() {
  return (
    <header className="bg-sagerBlack row-span-1 col-span-2 flex flex-nowrap p-2">
      <div className="flex flex-nowrap justify-between items-center w-8/10">
        <div>
          <img src="./sager_logo.png" alt="Logo" className="h-7" />
        </div>
        <div className="icons flex justify-around items-center gap-5 cursor-pointer hidden md:flex">
          <ScreenSVG />
          <WebSVG />
          <BillSVG />
        </div>
      </div>

      <div className="w-0.5 h-10 mx-4  bg-sagerGray-50 my-auto"></div>

      <div className="flex flex-col items-start justify-center">
        <p className="xl:text-xl text-sm text-sagerWhite">Hello, Mohammed Omar</p>
        <p className="xl:text-lg text-sm text-sagerBlue ">Technical Support</p>
      </div>
    </header>
  );
}

export default Header;
