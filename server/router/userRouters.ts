import { router, publicProcedure } from "../trpc";
import { z } from "zod";

const userInput = z.object({
  name: z.string(),
  about: z.string(),
});

export const UserRouter = router({
  postUser: publicProcedure.input(userInput).mutation((req) => {
    
    console.log(req.ctx.isAdmin);
    console.log(req.ctx.adminName);
    
    return {
      id: "1",
      name: req.input.name,
      about: req.input.about,
    };
  }),
});
