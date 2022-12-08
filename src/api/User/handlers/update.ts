import prisma from "../../../../prisma/client";
import { UserHandlers } from "../interface";

const updateUser: UserHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname } = req.body;
  try {
    const updateOneUser = await prisma.user.update({
      where: { id },
      data: { firstname, lastname },
    });
    res.status(200).json(updateOneUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default updateUser;
