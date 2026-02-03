import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

console.log("🔥 THIS IS THE CORRECT SERVER.TS FILE");


app.post("/session", async (req: Request, res: Response) => {
  try {
    const {
      userId,
      mode,
      fluency,
      confidence,
      posture,
      eyeContact,
      relevance,
      outfit,
      overall,
    } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const session = await prisma.session.create({
      data: {
        userId,
        mode,
        fluency,
        confidence,
        posture,
        eyeContact,
        relevance,
        outfit,
        overall,
      },
    });

    res.json(session);
  } catch (error) {
    console.error("SESSION CREATE ERROR:", error);
    res.status(500).json({ error: "Failed to create session" });
  }
});

app.get("/sessions/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId as string;

  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  try {
    const sessions = await prisma.session.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    });

    res.json(sessions);
  } catch (error) {
    console.error("FETCH SESSIONS ERROR:", error);
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
});

app.get("/history/:mode", async (req: Request, res: Response) => {
  const mode = String(req.params.mode);

  const sessions = await prisma.session.findMany({
    where: { mode },
    orderBy: { createdAt: "asc" },
  });

  res.json(sessions);
});

app.get("/sessions/:userId/:mode", async (req: Request, res: Response) => {
  const userId = String(req.params.userId);
  const mode = String(req.params.mode);

  if (!userId || !mode) {
    return res.status(400).json({ error: "userId and mode are required" });
  }

  try {
    const sessions = await prisma.session.findMany({
      where: {
        userId: userId,
        mode: mode,
      },
      orderBy: { createdAt: "asc" },
    });

    res.json(sessions);
  } catch (error) {
    console.error("FETCH USER SESSIONS ERROR:", error);
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
