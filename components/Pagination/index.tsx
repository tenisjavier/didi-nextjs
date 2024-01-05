"use client"

import { fetchArticleByCategory } from "@/utils/db"


interface PaginationProps {
  pagination: {
    skip: number,
    total: number
  }
  itemsContent: any[],
}

const Pagination = ({ pagination, itemsContent }: PaginationProps) => {

  async function nextPage() {
    const res = await fetch("/api/nextPage", {
      method: "POST",
      body: JSON.stringify({
        code: "mx",
        category: "news",
        limit: 10,
        skip: pagination.skip || 0 + 1,
      }),
    })
    console.log('nextPage', res)

  }

  async function prevPage() {
  }

  async function setPage(page: number) {

    console.log(page)
  }


  return (
    <>
      {pagination && (
        <div className="flex justify-center">
          <nav className="flex" role="navigation" aria-label="Navigation">
            <div className="mr-2">
              <form action={nextPage}>
                <button disabled={pagination.skip === 1} onClick={prevPage} className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white disabled:text-slate-300 disabled:dark:text-slate-600 shadow-sm disabled:shadow-none">
                  <span className="sr-only">Anterior</span><wbr />
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                    <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
                  </svg>
                </button>
              </form>
            </div>
            {/* <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
              {Array.from({ length: pagination?.total }).map((v, index) => {
                const indexPage = index + 1;
                const firstPage = indexPage - 10 / 2;
                const lastPage = indexPage + 10 / 2;

                if (pagination.skip >= firstPage && pagination.skip <= lastPage || indexPage == 1 || indexPage == pagination.total) {
                  return (
                    <>
                      {indexPage === pagination.total && firstPage >= pagination.skip + 10 / 2 - 1 && "..."}
                      <li key={index}>

                        <form action={() => setPage(indexPage)}>
                          <button
                            disabled={pagination.skip === indexPage}
                            className={`${indexPage == 1 ? 'rounded-l' : ''} ${indexPage == pagination.total ? 'rounded-r' : ''} inline-flex items-center justify-center leading-5 px-3.5 py-2 rounded-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white shadow-sm disabled:!text-indigo-500`}
                          >{indexPage}</button>
                        </form>
                      </li>
                      {indexPage === 1 && lastPage <= pagination.skip - 10 / 2 + 1 && "..."}
                    </>
                  )
                }
                return
              })}
            </ul>
            <div className="ml-2">
              <form action={nextPage}>
                <button disabled={pagination.skip === pagination.total} className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white disabled:text-slate-300 disabled:dark:text-slate-600 shadow-sm disabled:shadow-none">
                  <span className="sr-only">Próximo</span><wbr />
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                  </svg>
                </button>
              </form>
            </div> */}
          </nav>
        </div>
      )}
    </>
  )
}

export async function getServerSideProps(context: any) {

  const res = await fetchArticleByCategory("mx", "ride", {
    limit: 10,
    skip: 0,
  })

  console.log('getServerSideProps')

  return {
    props: {
      initialArticles: res,
    }, // will be passed to the page component as props
  }
}

export default Pagination