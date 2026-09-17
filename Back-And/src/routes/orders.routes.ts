import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();
const prisma = new PrismaClient();

router.use(authMiddleware);

// Criar pedido
router.post("/", async (req, res) => {
  try {
    const userId = req.user!.id;
    const { items } = req.body as {
      items: { menuItemId: string; quantity: number }[];
    };

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "O pedido precisa de itens" });
    }

    const order = await prisma.order.create({
      data: {
        userId,
        items: {
          create: items.map((item) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
          })),
        },
      },
      include: { items: { include: { menuItem: true } } },
    });

    return res.status(201).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao criar pedido" });
  }
});

// Listar pedidos do usuário logado
router.get("/", async (req, res) => {
  try {
    const userId = req.user!.id;

    const orders = await prisma.order.findMany({
      where: { userId },
      include: { items: { include: { menuItem: true } } },
      orderBy: { createdAt: "desc" },
    });

    return res.json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao buscar pedidos" });
  }
});

export default router;
