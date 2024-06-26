import { Request, Response } from 'express';
import { AppDataSource } from '../../database';
import { ServiceResponse } from '../../helpers';
import { UserService } from './service';

export class UserController {

  constructor(
    private readonly _userSrv = new UserService(),
    private readonly _cnx = AppDataSource.getInstance().cnx
  ) {}

  getResidencesByUserId = async (req: Request, res: Response) => {
    try {
      const data = await this._userSrv.getResidencesByUserId(this._cnx);

      return ServiceResponse.success({
        res,
        data,
      });
    } catch (error) {
      return ServiceResponse.fail({
        res,
        error,
      });
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const data = await this._userSrv.getAllUsers(this._cnx);
      return ServiceResponse.success({
        res,
        data,
      });
    } catch (error) {
      return ServiceResponse.fail({
        res,
        error,
      });
    }
  };

  getUsersByRoleId = async (req: Request, res: Response) => {
    try {
      const payload = Number(req.params.roleId);
      const data = await this._userSrv.getUsersByRoleId(this._cnx, payload);
      return ServiceResponse.success({
        res,
        data,
      });
    } catch (error) {
      return ServiceResponse.fail({
        res,
        error,
      });
    }
  };

  getUser = async (req: Request, res: Response) => {
    try {
      const payload = Number(req.params.id);
      const data = await this._userSrv.getById(this._cnx, payload);
      return ServiceResponse.success({
        res,
        data,
      });
    } catch (error) {
      return ServiceResponse.fail({
        res,
        error,
      });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const payload = Number(req.params.id);
      const data = await this._userSrv.deleteById(this._cnx, payload);
      return ServiceResponse.success({
        res,
        data,
      });
    } catch (error) {
      return ServiceResponse.fail({
        res,
        error,
      });
    }
  };

  setMainResidency = async (req: Request, res: Response) => {
    try {
      const residencyId = Number(req.query.residencyId);
      const userId = req.query.userId as string;
      const data = await this._userSrv.setMainResidency(this._cnx, residencyId, userId);

      return ServiceResponse.success({
        res,
        data,
      });
    } catch (error) {
      return ServiceResponse.fail({
        res,
        error,
      });
    }
  };

  notifyPanicAlert = async (_: Request, res: Response) => {
    try {
      const data = await this._userSrv.notifyPanicAlert();

      return ServiceResponse.success({
        res,
        data,
      });
    } catch (error) {
      return ServiceResponse.fail({
        res,
        error,
      });
    }
  };
}
