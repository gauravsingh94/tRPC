import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
import type { AppRouter } from "../server";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    // loggerLink(), //--> we can add logger link if we wanted to
    httpBatchLink({       //--> this will be the last link every time (if we call somthing below it that that would not work)
      url: "http://localhost:3000/trpc",
      headers: { Authorization: "TOKEN" },
    }),
  ],
});

async function main() {
  client.secretRoute.query();
}
main();
