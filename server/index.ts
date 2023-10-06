import express from "express";
import cors from "cors";

import { z } from "zod";

import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

const app = express();
app.use(cors());

const sampleInput = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

const AppRouter = router({
  getData: publicProcedure.output(sampleInput).query(() => {
    return {
      id: "1",
      title: "Top 1% developer (100x developer)",
      description:
        "Hey i am Gaurav Singh. I am a Computer Science student and want to become a top 1% devloper. I am hoping that i am able to achieve my dream 1 day.",
    };
  }),
});

app.use("/trpc", createExpressMiddleware({router:AppRouter}));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port}.`);
});

export type AppRouter = typeof AppRouter;
