const Controller = require('egg').Controller;
const GITHUB = {
  ACCESS_TOKEN_URI: 'https://github.com/login/oauth/access_token',
  REDIRECT_URI: 'http://localhost:8080/login',
  CLIENT_ID: 'a3796679db91112622be',
  CLIENT_SECRET: '861f8f0a39c4a8a4d5055c1ed13533ace2d957c0',
};


class OAuthController extends Controller {
  async getUserInfo() {
    const { ctx } = this;
    const code = ctx.request.body.code;
    const state = ctx.request.body.state;
    const url = `${GITHUB.ACCESS_TOKEN_URI}?client_id=${GITHUB.CLIENT_ID}&client_secret=${GITHUB.CLIENT_SECRET}&code=${code}&redirect_uri=${GITHUB.REDIRECT_URI}&state=${state}`;
    const res = await this.ctx.curl(url, { dataType: 'json' });
    if (this.ctx.session.user) {
      ctx.body = {
        code: 'success',
        data: ctx.session.user,
        message: 'message',
      };
    } else {
      const user = await ctx.curl('https://api.github.com/user', {
        method: 'GET',
        dataType: 'json',
        headers: {
          Authorization: `token ${res.data.access_token}`,
        },
      })
      this.ctx.session.user = user.data
      ctx.body = {
        code: 'success',
        data: user.data,
        message: 'message',
      };
    }

  }
  async logout() {
    if (this.ctx.session.user) this.ctx.session.user = null
    this.ctx.body = {
      code: 'success',
      data: {},
      message: 'logout',
    };
  }
}

module.exports = OAuthController;
