'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/health',
      handler: 'healthcheck.check',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/healthcheck',
      handler: 'healthcheck.check',
      config: {
        auth: false,
      },
    },
  ],
};
