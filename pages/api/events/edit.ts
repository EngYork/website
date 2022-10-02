import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../lib/prismadb";

interface IReq extends NextApiRequest {
  body: {
    id: string;
    name: string;
    when: string;
    where: string;
    description: string;
  };
}

export default async (req: IReq, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    if (req.method === "PATCH") {
      const { name, when, where, description, id } = req.body;
      const updatedEvent = await prisma.events.update({
        where: {
          id,
        },
        data: {
          name,
          when,
          where,
          description,
        },
      });
      if (updatedEvent.name) {
        res.status(200).json({ message: "OK" });
      } else {
        res.status(500).json({ message: "Could not update database" });
      }
    } else {
      res.status(400).json({ message: "Lean and Bop" });
    }
  } else {
    res.status(401).json({ message: "Rude boy" });
  }
};
