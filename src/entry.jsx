require('font-awesome-webpack');
require('suitcss-base');
require('./css/styles.css');

import React from 'react/addons';
import Router from 'react-router';
import routes from './js/routes.jsx';

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler/>, document.getElementById('app'));
});
