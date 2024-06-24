import { getServerSession } from "next-auth";
import { AuthOptions } from "./auth";

export async function getCurrentUser()  {
    const session = await getServerSession(AuthOptions) ; 
    return session?.user ; 
}
