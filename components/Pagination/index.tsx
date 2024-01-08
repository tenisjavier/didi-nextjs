"use client";

import { Fragment } from "react";

interface PaginationProps {
  pagination: {
    skip: number;
    total: number;
  };
  nextPage: () => Promise<void>;
  prevPage: () => Promise<void>;
  setPage: (page: number) => Promise<void>;
}

const Pagination = ({
  pagination,
  nextPage,
  prevPage,
  setPage,
}: PaginationProps) => {
  return (
    <>
      {pagination && (
        <div className="flex justify-center">
          <nav
            className="flex items-center "
            role="navigation"
            aria-label="Navigation"
          >
            <div className="mr-2">
              <button
                onClick={prevPage}
                disabled={pagination.skip + 1 === 1}
                className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white disabled:text-slate-300 disabled:dark:text-slate-600 shadow-sm disabled:shadow-none"
              >
                <span className="sr-only">Anterior</span>
                <wbr />
                <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                  <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
                </svg>
              </button>
            </div>
            <ul className="inline-flex text-sm font-medium shadow-sm">
              {Array.from({ length: pagination?.total - 10 }).map(
                (v, index) => {
                  const indexPage = index + 1;
                  const firstPage = indexPage - 3 / 2;
                  const lastPage = indexPage + 3 / 2;

                  if (
                    (pagination.skip + 1 >= firstPage &&
                      pagination.skip + 1 <= lastPage) ||
                    indexPage == 1 ||
                    indexPage == pagination.total - 10
                  ) {
                    return (
                      <Fragment key={index}>
                        {indexPage === pagination.total - 10 &&
                          firstPage >= pagination.skip + 3 / 2 - 1 && (
                            <span className="inline-flex items-center justify-center leading-5 px-3.5 py-2 rounded-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white shadow-sm disabled:!text-indigo-500">
                              ...
                            </span>
                          )}
                        <li className="list-none">
                          <button
                            onClick={() => setPage(indexPage)}
                            disabled={pagination.skip + 1 === indexPage}
                            className={`${indexPage == 1 ? "rounded-l" : ""} ${
                              indexPage == pagination.total - 10
                                ? "rounded-r"
                                : ""
                            } inline-flex items-center justify-center leading-5 px-3.5 py-2 rounded-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white shadow-sm disabled:!text-indigo-500`}
                          >
                            {indexPage}
                          </button>
                        </li>
                        {indexPage === 1 &&
                          lastPage <= pagination.skip - 3 / 2 + 1 && (
                            <span className="inline-flex items-center justify-center leading-5 px-3.5 py-2 rounded-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white shadow-sm disabled:!text-indigo-500">
                              ...
                            </span>
                          )}
                      </Fragment>
                    );
                  }
                  return;
                }
              )}
            </ul>
            <div className="ml-2">
              <button
                onClick={nextPage}
                disabled={pagination.skip + 1 === pagination.total - 10}
                className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white disabled:text-slate-300 disabled:dark:text-slate-600 shadow-sm disabled:shadow-none"
              >
                <span className="sr-only">Próximo</span>
                <wbr />
                <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                  <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Pagination;
