import { Banner } from "../Banner";
import Logo from "./Logo";
import NavBarButton from "./NavBarButton";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[7rem] items-center justify-between mb-11">
          <Logo />
          <Navbar />
          <NavBarButton />
        </div>

        <div className="mt-[8rem] mb-[11rem]">
          <Banner />
        </div>
      </div>
    </header>
  );
};

export default Header;
