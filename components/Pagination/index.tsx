import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
interface PaginationProps {
  page: number;
  limit: number;
  total: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, limit, total }) => {
  if (total > limit) {
    const totalPage = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

    //? render Links with numbers
    const renderPageButton = (index: number) => {
      const btnToogle =
        page === index
          ? "bg-gray-primary text-white pointer-events-none"
          : " text-gray-primary bg-gray-light";
      const pageParam = index === 1 ? "./" : `?page=${index}`;
      return (
        <li key={index} className="list-none">
          <Link
            href={`${pageParam}`}
            className={`w-10 items-center justify-center px-3.5 py-2.5 border border-gray-light hover:cursor-pointer ${btnToogle} hover:bg-gray-primary hover:text-white`}
          >
            {index}
          </Link>
        </li>
      );
    };

    //? calculate how many buttons we need
    const renderPageButtons = () => {
      const buttons = [];
      const start = Math.max(1, skip / limit - 1);
      const end = Math.min(totalPage, start + 5);

      for (let i = start; i <= end; i++) {
        buttons.push(renderPageButton(i));
      }

      return buttons;
    };
    const previousPageParam = page > 2 ? `?page=${page - 1}` : "./";
    const nextPageParam = `?page=${page + 1}`;

    const disabledIfFirstPage =
      page === 1 ? "pointer-events-none text-white" : "text-gray-primary";

    const disabledIfLastPage =
      page === totalPage
        ? "pointer-events-none text-white"
        : "text-gray-primary";

    return (
      <>
        <div className="w-full flex gap-2 justify-center items-center mt-10">
          <Link
            href={`${previousPageParam}`}
            className={`${disabledIfFirstPage} w-10 flex items-center justify-center px-2.5 py-2 bg-gray-light border border-gray-light hover:cursor-pointer  hover:bg-gray-primary hover:text-white disabled:text-gray-light`}
            aria-disabled={true}
          >
            <FaArrowLeft />
          </Link>
          {renderPageButtons()}
          <Link
            href={`${nextPageParam}`}
            className={`${disabledIfLastPage} w-10 flex items-center justify-center px-2.5 py-2 bg-gray-light border border-gray-light hover:cursor-pointer  hover:bg-gray-primary hover:text-white disabled:text-gray-light`}
          >
            <FaArrowRight />
          </Link>
        </div>
      </>
    );
  }

  return <></>;
};

export default Pagination;
