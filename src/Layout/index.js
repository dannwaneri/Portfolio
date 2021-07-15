import React from 'react';
import styled from 'styled-components'
import Nav from './Nav';
import Header from './Header';

const LayoutWrapper = styled.div`
  max-width: 550px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width:40rem){
    padding-top: 2rem;
   }
`;

const Layout = (props) => (
  <LayoutWrapper>
    <Header/>
    {props.children}
    <Nav/>
  </LayoutWrapper>
);

// export default { Layout };
// export { Layout, Nav };
export { Layout, Nav, Header };