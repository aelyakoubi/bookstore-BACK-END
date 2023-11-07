import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

const updateRecordById = async (id, title, artist, year, available, genre) => {
  const prisma = new PrismaClient();
  const updatedRecord = await prisma.record.updateMany({
    where: {
      id,
    },
    data: {
      title,
      artist,
      year,
      available,
      genre,
    },
  });

  if (!updatedRecord || updatedRecord.count === 0) {
    throw new NotFoundError("Record", id);
  }

  return {
    message: `Record with id ${id} was updated!`,
  };
};

export default updateRecordById;
