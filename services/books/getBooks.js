import { PrismaClient } from "@prisma/client";

const getBooks = async (genre, available) => {
  const prisma = new PrismaClient();

  return prisma.book.findMany({
    where: {
      genre,
      available,
    },
  });
};

export default getBooks;
