import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

const getUserOrders = async (userId) => {
  const prisma = new PrismaClient();

  const userOrders = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      Orders: {
        include: {
          book: true, // Include book details
          record: true, // Include record details
        },
      },
    },
  });

  if (!userOrders) {
    throw new NotFoundError("User", userId);
  }

  return userOrders;
};

export default getUserOrders;
