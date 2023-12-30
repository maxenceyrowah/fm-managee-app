import { LargButton, IllustrationSvg } from "../../shared";

const Banner = () => {
  return (
    <div className="flex">
      <div className="basis-1/2 m-auto">
        <div className="flex flex-col">
          <h1 className="text-6xl mb-10 text-dark-blue font-bold">
            Bring everyone together to build better products.
          </h1>
          <p className="text-dark-grayish-blue mb-10 text-xl w-[28rem]">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div>
            <LargButton
              {...{
                name: "Get Started",
                styles:
                  "bg-bright-red text-very-pale-red hover:bg-brightRedLight",
              }}
            />
          </div>
        </div>
      </div>

      <div className="basis-1/2">
        <IllustrationSvg />
      </div>
    </div>
  );
};

export default Banner;
