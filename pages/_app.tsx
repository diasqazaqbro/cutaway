import type { AppProps } from 'next/app'
import '../styles/style.sass'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
