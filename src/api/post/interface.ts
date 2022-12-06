import { Book } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "./handlers/responseError";

type BookBodyCreate = {
  title: String;
  year: Date;
};

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<{ id: String }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, BookBodyCreate>;
}
