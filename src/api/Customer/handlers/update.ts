import jwt from "jsonwebtoken";
import { getJWTSecret } from "./../../../utils/auth";
import bcrypt from "bcryptjs";
import prisma from "../../../../prisma/client";
import { ICustomerHandlers } from "./../interface";

const updateCustomer: ICustomerHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const updateOne = await prisma.customer.update({
      where: { id },
      data: { email, password: hashedPassword },
    });

    const secret = getJWTSecret();

    const { password: removedPassword, ...updatedCustomerWithoutPassword } =
      updateOne;

    const token = jwt.sign(updatedCustomerWithoutPassword, secret, {
      expiresIn: "10m",
    });

    res.setHeader("Authorization", `Bearer ${token}`);

    res.status(200).json(updateOne);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updateCustomer;
