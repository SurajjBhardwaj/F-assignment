import { authConfig } from "@/lib/Auth";
import NextAuth from "next-auth/next";


export default function handler(req: any, res: any) {
  return NextAuth(req, res, authConfig); // Ensure the handler is returning the response
}
