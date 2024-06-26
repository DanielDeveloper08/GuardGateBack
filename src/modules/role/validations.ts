import { schema, Joi, validate } from 'express-validation';
import { GlobalValidations } from '../../shared/global-validations';
import { RoleTypeEnum } from '../../enums/role.enum';

export class RoleValidations {

  constructor(
    private readonly _validations = new GlobalValidations()
  ) {}

  getAll = () => {
    const getAllSchema: schema = {
      query: Joi.object({
        page: this._validations.validNumberNoRequired('page'),
        limit: this._validations.validNumberNoRequired('limit'),
        search: this._validations.validStringNoRequired('search', 255),
      }),
    };

    return validate(getAllSchema);
  };

  getRoleByName = () => {
    const rolesOptions: Array<RoleTypeEnum> = [
      RoleTypeEnum.ADMIN,
      RoleTypeEnum.RESIDENT,
      RoleTypeEnum.OPERATIONAL,
    ];

    const getAllSchema: schema = {
      params: Joi.object({
        rolename: this._validations.validOptions(
          'rolename',
          rolesOptions,
          rolesOptions.join(' - ')
        ),
      }),
    };

    return validate(getAllSchema);
  };

  update = () => {
    const updateSchema: schema = {
      params: Joi.object({
        id: this._validations.validNumber('id'),
      }),
      body: Joi.object({
        name: this._validations.validString('name', 255),
        operationsIds: this._validations.validArrayNumber('operationsIds'),
      }),
    };

    return validate(updateSchema);
  };
}
