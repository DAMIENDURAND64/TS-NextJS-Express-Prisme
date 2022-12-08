import prisma from "../../../../prisma/client";
import { UserHandlers } from "../interface";

const getAllUsers: UserHandlers["getAll"] = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Users not found" });
  }
};
export default getAllUsers;
