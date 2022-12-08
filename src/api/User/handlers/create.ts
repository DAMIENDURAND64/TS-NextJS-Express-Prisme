import prisma from "../../../../prisma/client";
import { UserHandlers } from "../interface";

const createOneUser: UserHandlers["create"] = async (req, res) => {
  const { firstname, lastname } = req.body;
  try {
    const createUser = await prisma.user.create({
      data: { firstname, lastname },
    });
    res.status(200).json({ message: "User created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createOneUser;
