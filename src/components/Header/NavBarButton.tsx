import { LargButton } from "../../shared";
import Humburger from "../../shared/SvgIcons/Humburger";

const NavBarButton = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:block">
        <LargButton
          {...{
            name: "Get Started",
            styles: "bg-bright-red text-veryPaleRed hover:bg-brightRedLight",
          }}
        />
      </div>

      <div className="block md:hidden">
        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
          <Humburger />
        </button>
      </div>
    </div>
  );
};

export default NavBarButton;
