import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const getOneBook: BookHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await prisma.book.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneBook;
