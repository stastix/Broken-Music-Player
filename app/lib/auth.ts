import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";
import { NextAuthOptions } from "next-auth";

const adapter = PrismaAdapter(prisma);

export const AuthOptions: NextAuthOptions = {
  adapter: adapter as any, 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
