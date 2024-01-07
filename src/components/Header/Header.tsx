import { Banner } from "../Banner";
import Logo from "./Logo";
import NavBarButton from "./NavBarButton";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-banner bg-no-repeat md:bg-[length:auto_60rem] bg-auto md:bg-[56rem_-16rem] bg-[5rem_-15rem]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[7rem] items-center justify-between mb-11">
          <Logo />
          <Navbar />
          <NavBarButton />
        </div>

        <div className="md:mt-[8rem] mt-0 md:mb-[11rem] mb-0">
          <Banner />
        </div>
      </div>
    </header>
  );
};

export default Header;
