import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import PublicLayout from '../services/PublicLayout';
  
const PublicRoute = ({ path, component: Component }) => {

  const auth = useSelector(state => state.auth);
  const { isAuthenticated } = auth;

  if(isAuthenticated) return <Redirect to="/dashboard" />

  return (
    <PublicLayout>
      <Route path={path} component={Component} />
    </PublicLayout>
  );
}

export default PublicRoute;
