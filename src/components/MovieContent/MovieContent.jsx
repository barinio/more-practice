import { defaultImg } from 'services/imgDefault';
import {
  ListAdditional,
  Container,
  DivAdditional,
  InfoContent,
  InfoSection,
  LinkAdditional,
} from './MovieContent.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MovieContent = ({
  data: { title, poster_path, vote_average, overview, genres, release_date },
}) => {
  return (
    <InfoSection className="container">
      <Container>
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
        <InfoContent>
          <h2>
            {title} ({release_date?.split('-')[0]})
          </h2>
          <p>
            <span>User Score: </span>
            {Number(vote_average).toFixed(1) * 10}%
          </p>
          <p>
            <span>Overview: </span> {overview}
          </p>
          <p>
            <span>Genres: </span>
            {genres?.map(({ name }) => name).join(', ')}
          </p>
        </InfoContent>
      </Container>
      <DivAdditional>
        <h3>Additional information</h3>
        <ListAdditional>
          <li>
            <LinkAdditional to="cast">Cast</LinkAdditional>
          </li>
          <li>
            <LinkAdditional to="reviews">Reviews</LinkAdditional>
          </li>
        </ListAdditional>
      </DivAdditional>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </InfoSection>
  );
};

export default MovieContent;
