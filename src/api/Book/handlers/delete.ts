import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const deleteOneBook: BookHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await prisma.book.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: `Book with id:${id} deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteOneBook;
