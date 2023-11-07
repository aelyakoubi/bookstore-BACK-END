import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

const deleteBook = async (id) => {
  const prisma = new PrismaClient();

  const deleteBook = await prisma.book.deleteMany({
    where: {
      id,
    },
  });

  if (!deleteBook || deleteBook.count === 0) {
    throw new NotFoundError("Book", id);
  }

  return id;
};
export default deleteBook;
