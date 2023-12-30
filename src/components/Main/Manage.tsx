import { SmallButton } from "../../shared";
import { managerOptions } from "../../shared/manageConfig";

const Manage = () => (
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-10">
    <div className="flex gap-28">
      <div>
        <h1 className="text-5xl text-dark-blue font-bold w-[35rem] mb-10">
          What’s different about Manage?
        </h1>
        <p className="text-dark-grayish-blue text-xl w-[28rem]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="flex flex-col gap-10 items-baseline">
        {managerOptions.map((manager, index) => (
          <div key={index} className="flex gap-10">
            <div>
              <SmallButton {...{ name: manager.order }} />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg mb-5 text-dark-blue font-bold">
                {manager.title}
              </h3>
              <p className="text-dark-grayish-blue">{manager.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Manage;
