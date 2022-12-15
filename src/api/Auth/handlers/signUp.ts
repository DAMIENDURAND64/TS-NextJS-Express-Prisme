import IAuthController from "../interface";
import bcrypt from "bcryptjs";
import prisma from "../../../../prisma/client";
import { getJWTSecret } from "../../../utils/auth";
import jwt from "jsonwebtoken";

const signUp: IAuthController["signUp"] = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newCustomer = await prisma.customer.create({
      data: { email, password: hashedPassword },
    });

    const secret = getJWTSecret();

    const { password: removedPassword, ...newCustomerWithoutPassword } =
      newCustomer;

    const token = jwt.sign(newCustomerWithoutPassword, secret, {
      expiresIn: "10m",
    });

    res.setHeader("Authorization", `Bearer ${token}`);

    res.status(200).json(newCustomerWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default signUp;
