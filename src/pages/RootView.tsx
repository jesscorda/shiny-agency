import { Outlet } from 'react-router-dom';
import { GlobalStyles } from '../styles/Global';
import { StyleSheetManager } from 'styled-components';
import { Header } from '../components';
import isPropValid from '@emotion/is-prop-valid';

const RootView = () => {
  return (
    <StyleSheetManager
      shouldForwardProp={isPropValid}
      enableVendorPrefixes={true}
    >
      <GlobalStyles />
      <Header />
      <Outlet />
    </StyleSheetManager>
  );
};

export default RootView;
