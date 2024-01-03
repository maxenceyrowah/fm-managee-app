import { SmallButton } from "../../shared";
import { managerOptions } from "../../shared/manageConfig";

const Manage = () => (
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-10">
    <div className="flex 2xl:flex-row xl:flex-row  sm:flex-col flex-col gap-28">
      <div className="md:text-left text-center">
        <h1 className="md:text-5xl text-2xl text-dark-blue font-bold xl:w-[35rem] md:w-full lg:w-full w-full md:m-auto md:text-left text-center mb-10">
          What’s different about Manage?
        </h1>
        <p className="text-dark-grayish-blue text-xl xl:w-[28rem] md:w-full md:mt-10">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="flex flex-col gap-10 items-baseline">
        {managerOptions.map((manager, index) => (
          <div key={index} className="flex flex-col md:gap-10 gap-0">
            <div className="flex items-baseline md:gap-10 bg-veryPaleRed md:bg-transparent rounded-l-[20px] md:rounded-none">
              <SmallButton {...{ name: manager.order, styles: "py-5" }} />

              <div>
                <h3 className="text-lg mb-5 text-dark-blue font-bold">
                  {manager.title}
                </h3>
                <p className="text-dark-grayish-blue hidden md:block">
                  {manager.description}
                </p>
              </div>
            </div>

            <div className="md:hidden">
              <p className="text-dark-grayish-blue mt-5">
                {manager.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Manage;
