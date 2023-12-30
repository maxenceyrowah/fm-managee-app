import { SmallButton } from "../../shared";
import FacebookSvg from "../../shared/SvgIcons/Facebook";
import InstagramSvg from "../../shared/SvgIcons/Instagram";
import PinterestSvg from "../../shared/SvgIcons/Pinterest";
import TwitterSvg from "../../shared/SvgIcons/Twitter";
import YoutubeSvg from "../../shared/SvgIcons/Youtube";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <div className="bg-very-dark-blue h-[13rem]">
      <div className="flex w-5/6 m-auto justify-between items-center h-full">
        <div>
          <span className="text-4xl w-[30rem] text-very-pale-red">
            <Logo fill="#FFF" />
          </span>

          <div className="flex flex-row gap-5 mt-20">
            <FacebookSvg />
            <YoutubeSvg />
            <TwitterSvg />
            <PinterestSvg />
            <InstagramSvg />
          </div>
        </div>

        <div>
          <ul className="text-very-pale-red">
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
          <ul className="text-very-pale-red">
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

        <div className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder="Updates in your inbox…"
              className="px-6 py-3 rounded-full mr-3"
            />
            <SmallButton
              {...{
                name: "Go",
              }}
            />
          </div>
          <span className="text-dark-grayish-blue text-xs text-right">
            Copyright 2020. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
