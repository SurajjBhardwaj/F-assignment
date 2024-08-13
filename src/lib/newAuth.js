"use client"


import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";


export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("/");
  }
}
