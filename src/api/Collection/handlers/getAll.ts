import prisma from "../../../../prisma/client";
import collectionHandlers from "../interface";

const getAllCollection: collectionHandlers["getAll"] = async (req, res) => {
  try {
    const getAll = await prisma.collection.findMany();
    res.status(200).json(getAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default getAllCollection;
