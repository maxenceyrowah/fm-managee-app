import { SmallButton } from "../../shared";
import FacebookSvg from "../../shared/SvgIcons/Facebook";
import InstagramSvg from "../../shared/SvgIcons/Instagram";
import PinterestSvg from "../../shared/SvgIcons/Pinterest";
import TwitterSvg from "../../shared/SvgIcons/Twitter";
import YoutubeSvg from "../../shared/SvgIcons/Youtube";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <div className="bg-very-dark-blue">
      <div className="mx-auto max-w-screen-xl p-[2rem] md:p-0 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex md:flex-col flex-col-reverse items-center md:items-start">
          <span className="md:hidden text-dark-grayish-blue text-xs text-right mt-5">
            Copyright 2020. All Rights Reserved
          </span>
          <Logo fill="#FFF" />

          <div className="flex gap-5 mt-5 mb-5">
            <FacebookSvg />
            <YoutubeSvg />
            <TwitterSvg />
            <PinterestSvg />
            <InstagramSvg />
          </div>
        </div>

        <div className="flex gap-5 mb-5 mt-5">
          <div>
            <ul className="text-veryPaleRed">
              <li className=" hover:text-bright-red">
                <a href="">Home</a>
              </li>
              <li className=" hover:text-bright-red">
                <a href="">Pricing</a>
              </li>
              <li className=" hover:text-bright-red">
                <a href="">Products</a>
              </li>
              <li className=" hover:text-bright-red">
                <a href="">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-veryPaleRed">
              <li className=" hover:text-bright-red">
                <a href="">Careers</a>
              </li>
              <li className=" hover:text-bright-red">
                <a href="">Community</a>
              </li>
              <li className=" hover:text-bright-red">
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="">
            <input
              type="text"
              placeholder="Updates in your inbox…"
              className="px-6 py-3 md:p- rounded-full mr-3"
            />
            <SmallButton
              {...{
                name: "Go",
                styles: "py-4 px-9",
              }}
            />
          </div>
          <span className="text-dark-grayish-blue text-xs text-right mt-5 md:block hidden">
            Copyright 2020. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
