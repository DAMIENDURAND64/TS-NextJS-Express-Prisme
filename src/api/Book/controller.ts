import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import delete_ from "./handlers/delete";
import update from "./handlers/update";
import { BookHandlers } from "./interface";

const controller: BookHandlers = {
  getAll,
  getOne,
  create,
  delete: delete_,
  update,
};

export default controller;
