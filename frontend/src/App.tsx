import { RouterProvider } from "react-router-dom";
import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router()}></RouterProvider>{" "}
      </QueryClientProvider>
    </>
  );
}

export default App;
