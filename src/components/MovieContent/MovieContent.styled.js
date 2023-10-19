import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const InfoSection = styled.section`
  box-shadow: 1px 0 6px #ffbd33, 0 0 1px #ffbd33, 1px 2px 1px #ffbd33;
  padding: 15px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 10px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    background-image: linear-gradient(to right, #ff5733, #ffbd33);
    border-radius: 2px;
    width: 100%;
    height: 4px;
    bottom: -1px;
    left: 0;
    bottom: -15px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  & h2 {
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    font-size: 36px;
    line-height: 1.11;
  }

  & span {
    font-size: 20px;
    font-weight: 700;
  }

  & p {
    font-size: 18px;
  }
`;

export const DivAdditional = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-bottom: 30px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-image: linear-gradient(to right, #ff5733, #ffbd33);
    border-radius: 2px;
    width: 100%;
    height: 4px;
    bottom: -1px;
    left: 0;
    bottom: -15px;
  }

  & h3 {
    font-weight: 700;
    letter-spacing: 0.02em;
    font-size: 28px;
    line-height: 1.11;
    padding-top: 15px;
  }
`;

export const ListAdditional = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 15px;

  & li:first-child {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      background-image: linear-gradient(to top, violet, pink);
      border-radius: 2px;
      width: 4px;
      height: 100%;
      bottom: -1px;
      right: -18px;
    }
  }
`;

export const LinkAdditional = styled(NavLink)`
  background-image: linear-gradient(to top, violet, pink);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: 25px;
  line-height: 1.11;
  &.active {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      background-image: linear-gradient(to right, violet, pink);
      border-radius: 2px;
      width: 100%;
      height: 5px;
      bottom: -1px;
      left: 0;
      bottom: -10px;
    }
  }
`;
