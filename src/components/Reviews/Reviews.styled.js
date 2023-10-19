import styled from 'styled-components';

export const ListReviews = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 0px 0px 4px 4px;
    box-shadow: 0px 1px 6px #ffbd33, 0px 1px 1px #ffbd33, 0px 2px 1px #ffbd33;
    padding: 5px 0;
    padding: 10px 15px 15px 15px;
    & h4 {
      font-size: px;
    }
    & p {
      line-height: 1.5;
      letter-spacing: 0.02em;
    }
  }
`;
