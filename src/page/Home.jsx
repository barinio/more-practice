import TrendingList from 'components/TrendingList/TrendingList';
import { Suspense } from 'react';

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TrendingList />
      </Suspense>
    </>
  );
};
export default Home;
