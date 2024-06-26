import { Router } from 'express';

interface BaseRouterI {
  initRoutes(): void;
}

export abstract class BaseRouter<T, U = undefined> implements BaseRouterI {
  public router: Router;
  public controller: T;
  public validation?: U;

  constructor(TController: new () => T, UValidation?: new () => U) {
    this.router = Router();
    this.controller = new TController();
    this.validation = UValidation ? new UValidation() : undefined;

    this.initRoutes();
  }

  abstract initRoutes(): void;
}
