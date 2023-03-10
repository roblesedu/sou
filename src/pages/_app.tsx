import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/Sou.scss' ;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
			<title>Seguro de Vida Coletivo para Funcionários | Sou Seguros</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component { ...pageProps } />
		</>
	)
}
