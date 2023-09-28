import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    },
}));
export default getQueryClient;