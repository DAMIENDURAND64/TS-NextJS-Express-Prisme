import { ICustomerHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const getOneCustomer: ICustomerHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;

  try {
    const getOne = await prisma.customer.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(getOne);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getOneCustomer;
