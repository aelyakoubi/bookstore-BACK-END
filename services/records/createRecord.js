import { PrismaClient } from "@prisma/client";

const createRecord = async (title, artist, year, genre) => {
  const prisma = new PrismaClient();

  return prisma.record.create({
    data: {
      title,
      artist,
      year,
      genre,
      available,
    },
  });
};

export default createRecord;
