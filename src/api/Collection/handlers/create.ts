import prisma from "../../../../prisma/client";
import collectionHandlers from "../interface";

const createCollection: collectionHandlers["create"] = async (req, res) => {
  const { name } = req.body;
  try {
    const createOne = await prisma.collection.create({
      data: { name },
    });
    res.status(200).json(createOne);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default createCollection;
