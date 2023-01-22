import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../components/Navbar";
import { YoutubeApiProvider } from "../context/YoutubeApiContext";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <div>
      <Navbar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}
