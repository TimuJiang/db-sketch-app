'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/oAuth/getUserInfo', controller.oAuth.getUserInfo);
  router.post('/oAuth/logout', controller.oAuth.logout);
  router.post('/api/v1/project/create', controller.project.create);
  router.post('/api/v1/project/update', controller.project.update);
  router.post('/api/v1/project/delete', controller.project.delete);
  router.post('/api/v1/project/get', controller.project.get);
};
