import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@main/config/react-query.config'
import AppRouter from "@main/routes/app-router"

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppRouter />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

export default App
