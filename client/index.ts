import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

async function main() {
  let response = await client.getData.query();
  let response2 = await client.postUser.postUser.mutate({
    name: "Gaurav",
    about: "Top 1% coder.",
  });

  console.log(response2);
}
main();
