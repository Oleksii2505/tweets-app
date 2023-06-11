import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <MainContainer>
      <AppBar />
      <Suspense fallback={Loader}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;