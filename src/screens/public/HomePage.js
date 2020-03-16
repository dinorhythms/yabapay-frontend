import React, { useEffect } from 'react';

import QuickServices from '../../components/public/QuickServices';
import AppDownload from '../../components/public/AppDownload';
import Features from '../../components/public/Features';

 const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <QuickServices/>
      <Features/>
      <AppDownload/>
    </>
  )
}

export default HomePage;