import { HeaderBox, NavLinkStyled, NavList } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderBox>
        <div className="container">
          <nav>
            <NavList>
              <li>
                <NavLinkStyled to="/">Home</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="movies">Movies</NavLinkStyled>
              </li>
            </NavList>
          </nav>
        </div>
      </HeaderBox>
    </>
  );
};
