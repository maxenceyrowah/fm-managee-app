import { LargButton } from "../../shared";
import IllustrationSvg from "/public/assets/images/illustration-intro.svg";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-col-reverse lg:flex-row">
      <div className="basis-1/2 md:m-auto m-0">
        <div className="flex flex-col md:text-left text-center">
          <h1 className="md:text-6xl text-2xl mb-10 text-dark-blue font-bold">
            Bring everyone together to build better products.
          </h1>
          <p className="text-dark-grayish-blue mb-10 text-xl md:w-[28rem] w-full">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="md:mb-0 mb-10">
            <LargButton
              {...{
                name: "Get Started",
                styles:
                  "bg-bright-red text-veryPaleRed hover:bg-brightRedLight",
              }}
            />
          </div>
        </div>
      </div>

      <div className="basis-1/2 mb-10 md:p-10 p-0">
        <img src={IllustrationSvg} alt="Illustration svg" className="w-full" />
      </div>
    </div>
  );
};

export default Banner;
