import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

const deleteRecord = async (id) => {
  const prisma = new PrismaClient();

  const deleteRecord = await prisma.book.deleteMany({
    where: {
      id,
    },
  });

  if (!deleteRecord || deleteRecord.count === 0) {
    throw new NotFoundError("Book", id);
  }

  return id;
};
export default deleteRecord;
