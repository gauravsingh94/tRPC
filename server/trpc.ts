import { TRPCError, inferAsyncReturnType, initTRPC } from "@trpc/server";
import { createContext } from "./contex";

const t = initTRPC.context<inferAsyncReturnType<typeof createContext>>().create();      // We have to do this only one time in our server

const isAdminMiddleware = t.middleware(({ctx,next})=>{
    if(!ctx.isAdmin) throw new TRPCError({code:"UNAUTHORIZED"});
    return next({ctx:{user:{id:1}}});
})

export const router = t.router;
export const publicProcedure = t.procedure.use(isAdminMiddleware);
