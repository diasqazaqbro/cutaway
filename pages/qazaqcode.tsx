import Head from 'next/head'
import Aside from '../components/Aside.js'
import TableComponents from '../components/TableComponents.js'
export default function Qazaqcode() {
	return (
		<>
			<Head>
				<title>QazaqCode.team | diasqazaqbro</title>
			</Head>
			<main className='main'>
				<Aside />
				<div className='about'>
					<div className='roww'>
						<header className='header'>
							<div className='inner'>
								<span className='page1'>home/</span>
								<span className='page2'>QazaqCode</span>
							</div>
						</header>
						<h2 className='title'>Команда разработчиков QazaqCode</h2>
						<p className='text'>
							Амбициозные разработчики во главе со мной. Дизайнеры, Backender и
							т.д.
						</p>
						<TableComponents />
					</div>
				</div>
			</main>
		</>
	)
}
