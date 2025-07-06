import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const ProjectWrapper = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: true,
            },
        },
    });

    return (
        <QueryClientProvider
            client={queryClient}
        >
            {children}
        </QueryClientProvider>
    )
}