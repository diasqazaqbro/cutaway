import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link type='image/png' sizes='16x16' rel='icon' href='/favicon.png' />
				<meta name='description' content='diasqazaqbro site' />
				<meta charSet='UTF-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width' />
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
					crossOrigin='anonymous'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
			<script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
				crossOrigin='anonymous'
			></script>
		</Html>
	)
}
