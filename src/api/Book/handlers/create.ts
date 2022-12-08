import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const createOneBook: BookHandlers["create"] = async (req, res) => {
  const { name, authorId, collectionId } = req.body;
  try {
    const createBook = await prisma.book.create({
      data: {
        name,
        collection: {
          connect: {
            id: collectionId,
          },
        },
        author: {
          connect: {
            id: authorId,
          },
        },
        isAvailable: true,
      },
    });
    res.status(200).json({ message: "Book created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createOneBook;
