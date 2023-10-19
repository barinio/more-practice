import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.header`
  margin-bottom: 30px;
  border-bottom: 1px solid #ffbd33;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  & nav {
    width: 350px;
    margin: auto;
  }
`;
export const NavList = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  background-image: linear-gradient(to right, #ff5733, #ffbd33);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 24px 0;
  display: inline-block;
  font-weight: 700;

  &.active {
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
    }
  }
`;
