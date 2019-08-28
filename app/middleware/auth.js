'use strict';
module.exports = options => {
  return async function auth(ctx, next) {
    if (!ctx.path.match(/^\/api/)) {
      await next();
    } else {
      if (ctx.session.user) {
        await next();
      } else {
        ctx.body = {
          code: 6,
          message: '未登录',
        };
      }
    }
  };
};
