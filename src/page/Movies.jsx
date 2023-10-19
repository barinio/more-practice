import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/api';

import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) return;
      try {
        const resp = await getMovieByName(query);
        setSearchResult(resp);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovies();
  }, [query]);

  const onInputChange = ({ target }) => {
    setSearchQuery(target.value.toLowerCase());
  };

  const onSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;

    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      <SearchForm onFormSubmit={onSubmit} onInputChange={onInputChange} />
      <SearchList searchResult={searchResult} />
    </>
  );
};
export default Movies;
