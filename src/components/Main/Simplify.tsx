import { LargButton } from "../../shared";

const Simplify = () => {
  return (
    <div className="bg-bright-red mt-[15rem] h-[13rem] bg-banner bg-no-repeat bg-cover">
      <div className="flex w-5/6 m-auto justify-between items-center h-full">
        <div>
          <p className="text-4xl w-[30rem] text-very-pale-red">
            Simplify how your team works today.
          </p>
        </div>
        <div>
          <LargButton
            {...{
              name: "Get Started",
              styles:
                "bg-very-pale-red text-bright-red hover:bg-brightRedLight",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Simplify;
