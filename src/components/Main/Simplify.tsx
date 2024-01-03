import { LargButton } from "../../shared";

const Simplify = () => {
  return (
    <div className="bg-bright-red md:mt-[15rem] mt-10 md:h-[13rem] h-full bg-banner bg-no-repeat bg-cover">
      <div className="mx-auto max-w-screen-xl p-[2rem] sm:px-6 lg:px-8 md:flex flex-col md:flex-row block md:justify-between md:items-center text-center h-full">
        <p className="md:text-5xl text-5xl md:w-[30rem] text-veryPaleRed md:text-left text-center">
          Simplify how your team works today.
        </p>

        <div className="md:mt-0 mt-10">
          <LargButton
            {...{
              name: "Get Started",
              styles: "bg-veryPaleRed text-bright-red hover:bg-brightRedLight",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Simplify;
