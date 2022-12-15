import { Customer } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../responseError";

type TCustomerWithoutPassword = Omit<Customer, "password">;

type TLoginDetails = {
  email: string;
  password: string;
};

interface IAuthController {
  signIn: RequestHandler<
    null,
    TCustomerWithoutPassword | ResponseError,
    TLoginDetails
  >;
  signUp: RequestHandler<
    null,
    TCustomerWithoutPassword | ResponseError,
    Customer
  >;
}

export default IAuthController;
