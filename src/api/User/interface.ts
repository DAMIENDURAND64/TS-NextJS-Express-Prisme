import { User } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../responseError";

type UserBodyCreate = {
  firstname: string;
  lastname: string;
};

export interface UserHandlers {
  getAll: RequestHandler<null, User[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, User | ResponseError, null>;
  create: RequestHandler<null, User | ResponseError, UserBodyCreate>;
  update: RequestHandler<{ id: string }, User | ResponseError, UserBodyCreate>;
  delete: RequestHandler<{ id: string }, User | ResponseError, null>;
}
