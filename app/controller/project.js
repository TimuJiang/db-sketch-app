'use strict';
const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async create() {
    const { name, tables, links } = this.ctx.request.body;
    const project = new this.ctx.model.Project({ user_id: this.ctx.session.user.id, name, tables, links });
    const res = await project.save();
    this.ctx.body = {
      code: 0,
      data: res,
      message: 'success',
    };
  }

  async update() {
    const { id, tables, links } = this.ctx.request.body;
    const result = await this.ctx.model.Project.findOneAndUpdate({
      user_id: this.ctx.session.user.id,
      _id: id,
    }, { tables, links });
    if (result) {
      this.ctx.body = {
        code: 0,
        data: {},
        message: 'success',
      };
    } else {
      this.ctx.body = {
        code: 2,
        data: {},
        message: 'error',
      };
    }
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

  async detail() {
    const { id } = this.ctx.request.body;
    const list = await this.ctx.model.Project.findOne({ user_id: this.ctx.session.user.id, _id: id });
    this.ctx.body = {
      code: 0,
      data: list,
      message: 'success',
    };
  }
}

module.exports = ProjectController;
