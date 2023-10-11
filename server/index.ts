import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { AppRouter } from "./router/sampleRouter";
import { createContext } from "./contex";

const app = express();
app.use(cors());

app.use("/trpc", createExpressMiddleware({ router: AppRouter,createContext  }));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port}.`);
});

export type AppRouter = typeof AppRouter;
