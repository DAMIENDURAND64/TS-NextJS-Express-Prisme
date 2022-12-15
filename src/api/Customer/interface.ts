import { Customer } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../responseError";

type TCustomerCreate = {
  email: string;
  password: string;
};

export interface ICustomerHandlers {
  getAll: RequestHandler<null, Customer[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Customer | ResponseError, null>;
  create: RequestHandler<null, Customer | ResponseError, TCustomerCreate>;
  update: RequestHandler<
    { id: string },
    Customer | ResponseError,
    TCustomerCreate
  >;
  delete: RequestHandler<{ id: string }, null | ResponseError, null>;
}
