import NotInfo from 'components/NotInfo/NotInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { ListReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const castInfo = async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    castInfo();
  }, [movieId]);
  return (
    <>
      <ListReviews>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <NotInfo />
        )}
      </ListReviews>
    </>
  );
};

export default Reviews;
