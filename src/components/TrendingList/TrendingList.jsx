import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/api';
import { defaultImg } from 'services/imgDefault';
import { MovieLink, Title, TrendingTodayList } from './TrendingList.styled';

function TrendingList() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  useEffect(() => {
    const trendingMovie = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    trendingMovie();
  }, []);
  return (
    <>
      <div className="container">
        <Title>Trending today</Title>
        <TrendingTodayList>
          {movies.results?.map(({ id, poster_path, title }) => (
            <li key={id}>
              <MovieLink to={`movies/${id}`} state={{ from: location }}>
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
          ))}
        </TrendingTodayList>
      </div>
    </>
  );
}

export default TrendingList;
