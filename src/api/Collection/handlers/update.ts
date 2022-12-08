import prisma from "../../../../prisma/client";
import collectionHandlers from "../interface";

const updateCollection: collectionHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updateOne = await prisma.collection.update({
      where: { id },
      data: { name },
    });
    res.status(200).json(updateOne);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default updateCollection;
