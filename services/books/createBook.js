import { PrismaClient } from "@prisma/client";

const createBook = async (title, author, isbn, pages, available, genre) => {
  const prisma = new PrismaClient();

  return prisma.book.create({
    data: {
      title,
      author,
      isbn,
      pages,
      available,
      genre,
    },
  });
};

export default createBook;
