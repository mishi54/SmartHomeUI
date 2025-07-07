import { twMerge } from "tailwind-merge";
import { senaryHeading } from "../../global/TailwindVariables";

const ErrorMsg = (props) => {
  return (
    <p className={twMerge(`${senaryHeading} text-red-500 my-2 mb-0`)}>
      {props.children}
    </p>
  );
};
export default ErrorMsg;
