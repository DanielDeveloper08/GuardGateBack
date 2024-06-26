import { Request, Response } from 'express';
import { AppDataSource } from '../../database';
import { HomeService } from './service';
import { ServiceResponse } from '../../helpers';
import { VisitDataPayloadI } from '../../interfaces/home.interface';

export class HomeController {

  constructor(
    private readonly _homeSrv = new HomeService(),
    private readonly _cnx = AppDataSource.getInstance().cnx
  ) {}

  getVisitData = async (req: Request, res: Response) => {
    try {
      const payload = req.query as VisitDataPayloadI;
      const data = await this._homeSrv.getVisitData(this._cnx, payload);

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
