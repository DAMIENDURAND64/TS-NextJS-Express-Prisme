import prisma from "../../../../prisma/client";
import IAuthController from "../interface";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getJWTSecret } from "../../../utils/auth";

const signIn: IAuthController["signIn"] = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await prisma.customer.findUnique({
      where: { email },
    });

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    if (!bcrypt.compareSync(password, customer.password)) {
      return res.status(403).json({ message: "invalide credentials" });
    }

    const { password: removedPassword, ...customerWithoutPassword } = customer;

    const secret = getJWTSecret();

    const token = jwt.sign(customerWithoutPassword, secret, {
      expiresIn: "10m",
    });

    res.setHeader("Authorization", `Bearer ${token}`);

    res.status(200).json(customerWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: "Wrong credentials sorry" });
  }
};

export default signIn;
