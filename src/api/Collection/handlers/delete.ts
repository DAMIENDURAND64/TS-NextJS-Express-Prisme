import prisma from "../../../../prisma/client";
import collectionHandlers from "../interface";

const deleteCollection: collectionHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOne = await prisma.collection.delete({
      where: { id },
    });
    res.status(200).json(deleteOne);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default deleteCollection;
