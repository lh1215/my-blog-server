import {Get, JsonController, QueryParam, Post, Body, Ctx} from "routing-controllers";
import { Inject } from "typedi";
import UserService from "../service/UserService";
import { HttpJson } from "../util/HttpJson";
import {Context} from "koa";

@JsonController('/user')
export default class UserController {

  @Inject()
  private userService: UserService;

  // 获取用户信息，根据用户id
  @Get('/get-user-info')
  async getIntentPredictList(
    @QueryParam('userId') userId: string
  ): Promise<HttpJson> {
    try {
      const result = await this.userService.getUserInfoById(userId);
      return new HttpJson(result);
    } catch (e) {
      throw e
    }
  }

  // 登陆
  @Post('/login')
  async login(
      @Body() body: any,
      @Ctx() ctx: Context
  ): Promise<HttpJson> {
    try {
      const result = await this.userService.login(body, ctx);
      return new HttpJson(result);
    } catch (e) {
      throw e
    }
  }

}
