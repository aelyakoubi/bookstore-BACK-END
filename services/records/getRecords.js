import { PrismaClient } from "@prisma/client";

const getRecords = async (artist, genre, available) => {
  const prisma = new PrismaClient();

  return prisma.record.findMany({
    where: {
      genre,
      available,
    },
  });
};

export default getRecords;
