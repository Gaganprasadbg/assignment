import '@/styles/globals.css'
import { ExpenseContextProvider } from '@/utilities/expensesContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ExpenseContextProvider>
      <Component {...pageProps} />
    </ExpenseContextProvider>
    )
    
}
