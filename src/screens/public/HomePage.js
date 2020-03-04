import React from 'react';

import QuickSearch from '../../components/public/QuickSearch';
import QuickServices from '../../components/public/QuickServices';
import FeatureProducts from '../../components/public/FeatureProducts';
import HowDoesItWork from '../../components/public/HowDoesItWork';
import AppDownload from '../../components/public/AppDownload';

 const HomePage = () => {
  return (
    <>
      <QuickSearch/>
      <QuickServices/>
      <FeatureProducts/>
      <HowDoesItWork/>
      <AppDownload/>
    </>
  )
}

export default HomePage;