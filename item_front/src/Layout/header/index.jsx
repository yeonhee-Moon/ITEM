import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";



const Container = styled.header`
    background-color: #00bd94;
    color: #fff;
    padding: 20px;
`;

const Nav = styled.nav`
    margin-top: 10px;
`;

const Logo = styled.img`
    width: 150px;
`;

const HeaderNavLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    font-size: 18px;

    &.active {
        text-decoration: underline;
        font-weight: bold;
    }

    &:hover {
        text-decoration: underline;
    }
`;

export const Header = () => {
  const location = useLocation();
  const hideTagPaths = ["/join","/login","/findid","/reset"]; // 숨기고 싶은 경로들

  

  return (
    <Container>
      {/*<Logo src="https://via.placeholder.com/150" alt="Logo" />*/}
       {/* 특정 경로에서는 이 태그를 숨기고 싶을 때 */}
       {!hideTagPaths.includes(location.pathname) && (
        <Nav>
        <HeaderNavLink to="/main" end>Main</HeaderNavLink>
        <HeaderNavLink to="/matching">Matching</HeaderNavLink>
        </Nav>
        )}
    </Container>
  );

};