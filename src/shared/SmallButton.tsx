import { FC } from "react";

type TButtonProps = {
  name: string;
};
const SmallButton: FC<TButtonProps> = ({ name }) => {
  return (
    <button className="rounded-3xl text-very-pale-red bg-bright-red px-7 py-2">
      {name}
    </button>
  );
};

export default SmallButton;
