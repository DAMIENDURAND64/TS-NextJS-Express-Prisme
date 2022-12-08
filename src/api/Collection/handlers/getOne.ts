import prisma from "../../../../prisma/client";
import collectionHandlers from "../interface";

const getOneCollection: collectionHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const getOne = await prisma.collection.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(getOne);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default getOneCollection;
