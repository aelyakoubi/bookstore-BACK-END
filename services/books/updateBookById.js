import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

const updateBookById = async (
  id,
  title,
  author,
  isbn,
  pages,
  available,
  genre
) => {
  const prisma = new PrismaClient();
  const updatedBook = await prisma.book.updateMany({
    where: {
      id,
    },
    data: {
      title,
      author,
      isbn,
      pages,
      available,
      genre,
    },
  });

  if (!updatedBook || updatedBook.count === 0) {
    throw new NotFoundError("Book", id);
  }

  return {
    message: `Book with id ${id} was updated!`,
  };
};

export default updateBookById;
