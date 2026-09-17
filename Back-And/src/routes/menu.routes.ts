import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (_req, res) => {
  try {
    const items = await prisma.menuItem.findMany({
      where: { available: true },
    });
    return res.json(items);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao buscar cardápio" });
  }
});

export default router;
