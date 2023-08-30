import { NextFunction, Request, Response } from 'express';
import { demoService } from '../services';
import {
  AuthFailureResponse,
  NotFoundResponse,
  ForbiddenResponse,
  BadRequestResponse,
  InternalErrorResponse,
  SuccessMsgResponse,
  FailureMsgResponse,
  SuccessResponse,
  AccessTokenErrorResponse,
  TokenRefreshResponse,
} from '../helpers/response';

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  const loggedUser = await demoService.showDemo(res.locals.user);
  if (loggedUser && loggedUser.user_type !== 'admin') {
    return AccessTokenErrorResponse(res, 'UnAuthorized');
  }
  return next();
};

export default isAdmin;
