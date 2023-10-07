import { initTRPC } from "@trpc/server";

const t = initTRPC.create();      // We have to do this only one time in our server

export const router = t.router;
export const publicProcedure = t.procedure;
