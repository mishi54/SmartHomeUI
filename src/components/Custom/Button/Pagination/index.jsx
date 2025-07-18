import clsx from "clsx";
import { Pagination } from "flowbite-react";
import { twMerge } from "tailwind-merge";

function CustomPagination({
  className,
  paginationStyle,
  totalPages,
  currentPage,
  onPageChange,
}) {
  return (
    <div
      className={twMerge(
        clsx("flex overflow-x-auto sm:justify-center", className),
      )}
    >
      <Pagination
        previousLabel="Prev"
        theme={customPaginationTheme}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
        className={clsx(paginationStyle && paginationStyle)}
      />
    </div>
  );
}

export default CustomPagination;

const customPaginationTheme = {
  base: "",
  layout: {
    table: {
      base: "text-sm text-gray-700 dark:text-gray-400",
      span: "font-semibold text-gray-900 dark:text-white",
    },
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5",
    },
    next: {
      base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5",
    },
    selector: {
      base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-supernova hover:text-white",
      active: "bg-supernova text-white hover:supernova hover:text-white",
      disabled: "cursor-not-allowed opacity-50",
    },
  },
};
