'use strict';

module.exports = {
  async check(ctx) {
    ctx.body = {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  },
};
