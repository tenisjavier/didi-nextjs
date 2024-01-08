import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface PaginationProps {
  pagination?: {
    skip: number;
    total: number;
    limit: number;
  };
  nextPage: () => Promise<void>;
  prevPage: () => Promise<void>;
  setPage: (page: number) => Promise<void>;
}

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  nextPage,
  prevPage,
  setPage,
}) => {

  if (pagination) {
    const totalPage = Math.ceil(pagination.total / pagination.limit);

    const renderPageButton = (index: number) => (
      <li key={index} className="list-none">
        <button
          onClick={() => setPage((index * pagination.limit) - 10)}
          disabled={pagination.skip / pagination.limit + 1 === index}
          className={`w-10 h-10 items-center justify-center px-2.5 py-2 text-gray-median bg-white border border-gray-light hover:cursor-pointer disabled:text-gray-light`}
        >
          {index}
        </button>
      </li>
    );

    const renderPageButtons = () => {
      const buttons = [];
      const start = Math.max(1, pagination.skip / pagination.limit - 1);
      const end = Math.min(totalPage, start + 3);

      for (let i = start; i <= end; i++) {
        buttons.push(renderPageButton(i));
      }

      return buttons;
    };

    return (
      <>
        {pagination && (
          <div className="w-full flex gap-2 justify-center items-center mt-10">
            <button
              onClick={() => setPage(0)}
              disabled={pagination.skip === 0}
              className="w-10 h-10 items-center justify-center px-2.5 py-2 text-gray-median bg-white border border-gray-light hover:cursor-pointer disabled:text-gray-light"
            >
              <FontAwesomeIcon icon={faAnglesLeft} className="w-3 " />
            </button>
            <button
              onClick={prevPage}
              disabled={pagination.skip === 0}
              className="w-10 h-10 items-center justify-center px-2.5 py-2 text-gray-median bg-white border border-gray-light hover:cursor-pointer disabled:text-gray-light"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="w-3" />
            </button>

            {renderPageButtons()}

            <button
              onClick={nextPage}
              disabled={pagination.total - pagination.skip < pagination.limit}
              className="w-10 h-10 items-center justify-center px-2.5 py-2 text-gray-median bg-white border border-gray-light hover:cursor-pointer disabled:text-gray-light"
            >
              <FontAwesomeIcon icon={faAngleRight} className="w-3" />
            </button>
            <button
              onClick={() => setPage(Math.floor(pagination.total / 10) * 10)}
              disabled={pagination.total - pagination.skip < pagination.limit}
              className="w-10 h-10 items-center justify-center px-2.5 py-2 text-gray-median bg-white border border-gray-light hover:cursor-pointer disabled:text-gray-light"
            >
              <FontAwesomeIcon icon={faAnglesRight} className="w-3" />
            </button>
          </div>
        )}
      </>
    );
  }

  return <></>
};

export default Pagination;
