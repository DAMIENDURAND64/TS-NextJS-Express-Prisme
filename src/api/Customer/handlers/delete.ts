import prisma from "../../../../prisma/client";
import { ICustomerHandlers } from "./../interface";

const deleteCustomer: ICustomerHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOne = await prisma.customer.delete({
      where: { id },
    });
    res.status(200).json(deleteOne);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteCustomer;
