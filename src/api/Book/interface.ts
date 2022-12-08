import { Book } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../responseError";

type BookBodyCreate = {
  name: string;
  authorId: string;
  collectionId: string;
};

type BookBodyUpdate = {
  name: string;
  authorId: string;
  collectionId: string;
  isAvailable: boolean;
};

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, BookBodyCreate>;
  delete: RequestHandler<{ id: string }, Book | ResponseError, null>;
  update: RequestHandler<{ id: string }, Book | ResponseError, BookBodyUpdate>;
}
