import styled from 'styled-components';

export const ListCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 48px;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    height: 380px;
    border-radius: 0px 0px 4px 4px;
    width: calc((100% - 96px) / 5);
    box-shadow: 0px 1px 6px #ffbd33, 0px 1px 1px #ffbd33, 0px 2px 1px #ffbd33;
    padding: 5px 0;
  }
`;
export const CastInfo = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  & h4 {
    font-size: 20px;
  }
  & p {
    text-align: center;
    & span {
      font-weight: 700;
      font-size: 16px;
    }
  }
`;
