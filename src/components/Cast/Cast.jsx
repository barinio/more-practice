import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import { defaultImg } from 'services/imgDefault';
import { CastInfo, ListCast } from './Cast.styled';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const castInfo = async () => {
      try {
        const { cast } = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    castInfo();
  }, [movieId]);
  return (
    <>
      <ListCast>
        {cast?.map(({ cast_id, name, profile_path, character }) => (
          <li key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : defaultImg
              }
              alt={name}
              width={200}
              height={300}
            />
            <CastInfo>
              <h4>{name}</h4>
              <p>
                <span>Character: </span> {character}
              </p>
            </CastInfo>
          </li>
        ))}
      </ListCast>
    </>
  );
}

export default Cast;
