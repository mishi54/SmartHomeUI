import React from "react";

import clsx from "clsx";
import QuinaryText from "../Typography/QuinaryText";

const Options = ({ options }) => {
  return (
    <div className="bg-white px-4 pt-2 pb-5 rounded-xl border border-slate-100">
      {options.map(({ title, icon, purpose = "", action }, i) => (
        <div
          className="flex items-center gap-3 mt-3 cursor-pointer"
          key={i}
          onClick={action}
        >
          {icon && <img className="h-6 w-6" src={icon} alt={title} />}
          <QuinaryText
            text={title}
            className={clsx(
              "font-semibold",
              purpose === "danger" && "text-vividRed",
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Options;
