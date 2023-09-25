import { Page } from "../types&enums/pages.types";

export interface PaginationParams {
  page: Page,
  setPage: React.Dispatch<React.SetStateAction<Page>>,
  onPageChange: (page: Page) => void;
}

export const Pagination = ({ page, setPage, onPageChange }: PaginationParams) => {
    const handlePageChange = (newCurrentpage: number) => {
        setPage({ current: newCurrentpage, total_pages: page.total_pages });
        onPageChange({ current: newCurrentpage, total_pages: page.total_pages });
      };

  const maxPagesToShow = 4;

  const startPage = Math.max(1, page.current - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(page.total_pages, startPage + maxPagesToShow - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
        <ul className="pagination flex space-x-2">
        {page.current > 1 && (
            <li className="pagination-item cursor-pointer" onClick={() => handlePageChange(page.current - 1)}>
            Anterior
            </li>
        )}

        {pageNumbers.map((pageNumber) => (
            <li
            key={pageNumber}
            className={`pagination-item ${pageNumber === page.current ? 'text-sky-300 font-bold' : ''} cursor-pointer`}
            onClick={() => handlePageChange(pageNumber)}
            >
            {pageNumber}
            </li>
        ))}

        {page.current < page.total_pages && (
            <li className="pagination-item cursor-pointer" onClick={() => handlePageChange(page.current + 1)}>
            Próxima
            </li>
        )}
        </ul>
  );
};