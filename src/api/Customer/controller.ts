import { ICustomerHandlers } from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import delete_ from "./handlers/delete";
import update from "./handlers/update";

const controllers: ICustomerHandlers = {
  getOne,
  getAll,
  update,
  delete: delete_,
};

export default controllers;
