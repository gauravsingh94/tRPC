import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { createContext } from "./contex";

const t = initTRPC.context<inferAsyncReturnType<typeof createContext>>().create();      // We have to do this only one time in our server

export const router = t.router;
export const publicProcedure = t.procedure;
