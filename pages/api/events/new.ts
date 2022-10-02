import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../lib/prismadb";

interface IReq extends NextApiRequest {
  body: {
    name: string;
    when: string;
    where: string;
    description: string;
  };
}

export default async (req: IReq, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    if (req.method === "POST") {
      try {
        await prisma.events.findFirstOrThrow({
          where: {
            name: req.body.name,
          },
        });
        res.status(409).json({
          message: `Event with name "${req.body.name}" already exists`,
        });
      } catch (_) {
        const { name, when, where, description } = req.body;
        const newEvent = await prisma.events.create({
          data: {
            name,
            when,
            where,
            description,
          },
        });
        if (newEvent.name) {
          res.status(200).json({ message: "OK" });
        } else {
          res.status(500).json({ message: "Could not update database" });
        }
      }
    } else {
      res.status(400).json({ message: "Lean and Bop" });
    }
  } else {
    res.status(401).json({ message: "Rude boy" });
  }
};
