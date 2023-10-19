import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingTodayList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 48px;
  margin-bottom: 30px;
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 460px;
    border-radius: 0px 0px 4px 4px;
    width: calc((100% - 72px) / 4);
    box-shadow: 0px 1px 6px #ffbd33, 0px 1px 1px #ffbd33, 0px 2px 1px #ffbd33;
    padding: 5px 0;
  }
`;
export const MovieLink = styled(Link)`
  width: 264px;
  background-image: linear-gradient(to right, violet, pink);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  & img {
    border-radius: 4px 4px 0px 0px;
  }
  & h3 {
    height: 63px;
    display: flex;
    text-align: center;
    align-items: center;
  }
`;
export const Title = styled.h2`
  background-image: linear-gradient(to top, red, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  margin-bottom: 25px;
`;
