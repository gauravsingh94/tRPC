# tRPC 

This repository is a tRPC (TypeScript React RPC) example project where each commit represents different concepts and features of tRPC, such as procedures, queries, mutations, context, middlewares, and the client.

## Project Structure

The project is organized with a clear folder structure to keep everything well-organized:

- **client**: Contains the client-side code, typically the frontend of your application.
- **server**: Contains the server-side code, responsible for handling API requests.
  - **routes**: The server routes are organized here, with each route having its own TypeScript file.
    - `userRoutes.ts`: Example user-related routes.
    - `sampleroutes.ts`: Sample routes for demonstration.
  - `context.ts`: Defines the application context, which can include shared data and services.
  - `index.ts`: Entry point for the server application.
  - `trpc.ts`: Configuration and setup for tRPC on the server.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone git@github.com:gauravsingh94/tRPC.git
