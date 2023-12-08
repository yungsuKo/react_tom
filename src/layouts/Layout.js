import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px;
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container>{children}</Container>
      <Footer></Footer>
    </>
  );
};

export default Layout;
