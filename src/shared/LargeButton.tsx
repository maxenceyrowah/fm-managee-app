import { FC } from "react";

type TButtonProps = {
  name: string;
  styles?: string;
};
const LargeButton: FC<TButtonProps> = ({ name, styles }) => {
  return (
    <button
      className={`${styles} px-7 py-2.5 rounded-3xl shadow-2xl shadow-bright-red`}
    >
      {name}
    </button>
  );
};

export default LargeButton;
