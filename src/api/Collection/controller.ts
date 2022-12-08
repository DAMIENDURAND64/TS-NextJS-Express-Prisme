import getOne from "./handlers/getOne";
import getAll from "./handlers/getAll";
import create from "./handlers/create";
import update from "./handlers/update";
import delete_ from "./handlers/delete";
import collectionHandlers from "./interface";

const controllers: collectionHandlers = {
  getOne,
  getAll,
  create,
  update,
  delete: delete_,
};
export default controllers;
