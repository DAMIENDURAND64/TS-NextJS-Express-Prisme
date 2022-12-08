import { Collection } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../responseError";

type collectionBodyCreate = {
  name: string;
};

export default interface collectionHandlers {
  getOne: RequestHandler<{ id: string }, Collection | ResponseError, null>;
  getAll: RequestHandler<null, Collection[] | ResponseError, null>;
  create: RequestHandler<
    null,
    Collection | ResponseError,
    collectionBodyCreate
  >;
  update: RequestHandler<
    { id: string },
    Collection | ResponseError,
    collectionBodyCreate
  >;
  delete: RequestHandler<{ id: string }, Collection | ResponseError, null>;
}
