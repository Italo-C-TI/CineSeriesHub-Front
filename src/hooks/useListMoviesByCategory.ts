import { useQuery } from 'react-query';
import { ListMoviesCategoryParams, UseListMoviesByCategory } from '../types&enums/movieListCategory.types';
import { getListMoviesByCategory } from '../services';

export const useListMoviesByCategory: UseListMoviesByCategory = ({ movieListCategory, page }: ListMoviesCategoryParams) => {

  const { data, isSuccess,refetch } = useQuery(['listMoviesCategory', movieListCategory, page], () => getListMoviesByCategory({movieListCategory,page}), {
    retry: false,
  });

  if (!isSuccess) {
    return {
        results: [],
        page: 0,
        total_pages: 0,
        isSuccess,
        refetch
    };
  }
  return {
        results:data.results,
        page:data.page,
        total_pages: data.total_pages,
        isSuccess,
        refetch,
        
    };
};
