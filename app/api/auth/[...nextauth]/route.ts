import { AuthOptions } from "@/app/lib/auth" // Referring to the auth.ts we just created
import NextAuth from "next-auth/next"

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }
