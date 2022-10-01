import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import prisma from "../../../lib/prismadb";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const userIsFound = await prisma.allowedUsers.findFirst({
        where: {
          userName: user.name || "",
        },
      });
      if (userIsFound) return true;
      else return false;
    },
  },
};
export default NextAuth(authOptions);
