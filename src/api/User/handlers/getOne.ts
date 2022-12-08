import prisma from "../../../../prisma/client";
import { UserHandlers } from "../interface";

const getOneUser: UserHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No user found" });
  }
};

export default getOneUser;
