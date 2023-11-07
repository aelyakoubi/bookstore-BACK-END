import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

const getUserOrders = async (userId) => {
  const prisma = new PrismaClient();

  const userOrders = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    ///////   zelf toegevoegd  // Add other scalar fields you need
    select: {
      id: true,
      username: true,
    },
    include: {
      orders: true,
    },
  });
  if (!userOrders) {
    throw new NotFoundError("User", userId);
  }
  return userOrders;
};

export default getUserOrders;
