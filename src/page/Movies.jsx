import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovies = async () => {
      try {
        if (!query) return;
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
