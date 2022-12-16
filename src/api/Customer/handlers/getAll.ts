import prisma from "../../../../prisma/client";
import { ICustomerHandlers } from "./../interface";

const getAllCustomer: ICustomerHandlers["getAll"] = async (req, res) => {
  try {
    const customers = await prisma.customer.findMany();

    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Not possible to get all of them" });
  }
};

export default getAllCustomer;
