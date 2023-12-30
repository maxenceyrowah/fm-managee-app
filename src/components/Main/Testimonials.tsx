import { LargButton } from "../../shared";
import { cardOptions } from "../../shared/testimonialCardConfig";

const Testimonials = () => {
  return (
    <div className="mt-[10rem] text-center">
      <h1 className="text-dark-blue font-bold text-5xl mb-10">
        What they’ve said
      </h1>

      <div className="flex gap-10 mt-20">
        {cardOptions.map((card, index) => (
          <div
            className="flex flex-col items-center bg-veryLightGray p-5"
            key={index}
          >
            <div className="m-auto">
              <img
                src={card.img}
                alt={`${card.name} photo`}
                height={10}
                width={70}
                className="-mt-[3rem] mb-9"
              />
            </div>
            <p className="text-dark-blue mb-10">{card.name}</p>
            <p className="text-dark-grayish-blue">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <LargButton
          {...{
            name: "Get Started",
            styles: "bg-bright-red text-very-pale-red hover:bg-brightRedLight",
          }}
        />
      </div>
    </div>
  );
};

export default Testimonials;
