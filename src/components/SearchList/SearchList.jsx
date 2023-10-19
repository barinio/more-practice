import NotInfo from 'components/NotInfo/NotInfo';
import { useLocation } from 'react-router-dom';
import { defaultImg } from 'services/imgDefault';
import { MovieLink, SearchListStyled } from './SearchList.styled';

const SearchList = ({ searchResult: { results } }) => {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <SearchListStyled>
          {results?.length > 0 ? (
            results.map(({ id, poster_path, title }) => (
              <li key={id}>
                <MovieLink to={`${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                    width={264}
                    height={396}
                  />
                  <h3>{title}</h3>
                </MovieLink>
              </li>
            ))
          ) : (
            <NotInfo />
          )}
        </SearchListStyled>
      </div>
    </>
  );
};

export default SearchList;
