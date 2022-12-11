import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const getAllBooks: BookHandlers["getAll"] = async (req, res) => {
  const { author, collection } = req.query;

  try {
    const books = await prisma.book.findMany({
      include: {
        collection: collection === "true" ? true : false,
        author: author === "true" ? true : false,
      },
    });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllBooks;
