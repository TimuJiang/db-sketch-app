'use strict';
const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async create() {
    const { name, tables, links } = this.ctx.request.body;
    const project = new this.ctx.model.Project({ user_id: this.ctx.session.user.id, name, tables, links });
    project.save()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    this.ctx.body = {
      code: 0,
      data: {},
      message: 'success',
    };
  }

  async update() {
    console.log('xxxx');
  }

  async delete() {
    console.log('xxxx');
  }

  async get() {
    const list = await this.ctx.model.Project.find({ user_id: this.ctx.session.user.id });
    this.ctx.body = {
      code: 0,
      data: list,
      message: 'success',
    };
  }
}

module.exports = ProjectController;
