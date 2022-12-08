import prisma from "../../../../prisma/client";
import { UserHandlers } from "../interface";

const deleteUser: UserHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOne = await prisma.user.delete({
      where: { id },
    });
    res.status(200).json(deleteOne);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteUser;
