(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/home');
    const clientRoutes = require('../routes/clients');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/clients', clientRoutes);
  };

})(module.exports);
