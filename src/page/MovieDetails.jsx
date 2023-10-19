import MovieContent from 'components/MovieContent/MovieContent';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { state } = useLocation();
  const backLinkRef = useRef(state?.from ?? '/');

  const [data, setMovieInfo] = useState([]);

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    movieDetails();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkRef.current} className="back-link">
        ←Go Back
      </Link>
      <MovieContent data={data} />
    </>
  );
};

export default MovieDetails;
