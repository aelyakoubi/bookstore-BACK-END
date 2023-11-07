import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

const getRecordById = async (id) => {
  const prisma = new PrismaClient();
  const book = await prisma.record.findUnique({
    where: {
      id,
    },
  });

  if (!record) {
    throw new NotFoundError("Record", id);
  }

  return book;
};

export default getRecordById;
