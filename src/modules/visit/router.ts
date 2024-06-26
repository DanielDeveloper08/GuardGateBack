import { GlobalMiddleware } from '../../middlewares/global-middleware';
import { BaseRouter } from '../../shared/base-router';
import { VisitController } from './controller';
import { VisitValidations } from './validations';

export class VisitRouter extends BaseRouter<VisitController, VisitValidations> {
  constructor() {
    super(VisitController, VisitValidations);
  }

  initRoutes(): void {
    this.router.get(
      '/visits',
      [
        GlobalMiddleware.validateJwtToken,
        this.validation!.getAll(),
      ],
      this.controller.getAll
    );

    this.router.get(
      '/visits-state-summary',
      [
        GlobalMiddleware.validateJwtToken,
        this.validation!.getDateFiltered(),
      ],
      this.controller.getStatusSummary
    );

    this.router.get(
      '/visits-date-summary',
      [
        GlobalMiddleware.validateJwtToken,
        this.validation!.getDateFiltered(),
      ],
      this.controller.getDateSummary
    );

    this.router.get(
      '/visits/:id',
      [
        GlobalMiddleware.validateJwtToken,
        this.validation!.getById(),
      ],
      this.controller.getById
    );

    this.router.post(
      '/visits',
      [
        GlobalMiddleware.validateJwtToken,
        this.validation!.create(),
      ],
      this.controller.create
    );

    this.router.post(
      '/visits/detail',
      [
        GlobalMiddleware.validateJwtToken,
        this.validation!.saveDetail(),
      ],
      this.controller.saveDetail
    );

    this.router.post(
      '/visits/sendQR',
      [
        GlobalMiddleware.validateJwtToken,
        this.validation!.sendNotification(),
      ],
      this.controller.sendNotification
    );

    this.router.patch(
      '/visits/:id',
      [
        GlobalMiddleware.validateJwtToken,
        this.validation!.cancel(),
      ],
      this.controller.cancel
    );
  }
}
