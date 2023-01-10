import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const RouterSetting = ({ children })=> (
  <Router>{children}</Router>
);

export default RouterSetting;
