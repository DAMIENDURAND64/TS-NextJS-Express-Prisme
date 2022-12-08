import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const updateBook: BookHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { name, isAvailable, collectionId, authorId } = req.body;
  try {
    const updateBook = await prisma.book.update({
      where: {
        id,
      },
      data: { name, isAvailable, collectionId, authorId },
    });
    res.status(200).json({ message: `Book with id${id} is well updated` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateBook;
