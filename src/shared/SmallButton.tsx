import { FC } from "react";

type TButtonProps = {
  name: string;
  styles?: string;
};
const SmallButton: FC<TButtonProps> = ({ name, styles }) => {
  return (
    <button
      className={`${styles} rounded-3xl text-veryPaleRed bg-bright-red px-7 md:py-2`}
    >
      {name}
    </button>
  );
};

export default SmallButton;
