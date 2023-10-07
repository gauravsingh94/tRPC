import { router, publicProcedure } from "../trpc";
import { z } from "zod";

const sampleInput = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export const AppRouter = router({
  getData: publicProcedure.output(sampleInput).query(() => {
    return {
      id: "1",
      title: "Top 1% developer (100x developer)",
      description:
        "Hey i am Gaurav Singh. I am a Computer Science student and want to become a top 1% devloper. I am hoping that i am able to achieve my dream 1 day.",
    };
  }),
});
