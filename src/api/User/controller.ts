import { UserHandlers } from "./interface";
import create from "../User/handlers/create";
import getOne from "../User/handlers/getOne";
import getAll from "../User/handlers/getAll";
import update from "../User/handlers/update";
import delete_ from "../User/handlers/delete";

const controller: UserHandlers = {
  create,
  getOne,
  getAll,
  update,
  delete: delete_,
};

export default controller;
