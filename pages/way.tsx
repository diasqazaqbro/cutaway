import Head from 'next/head'
import Aside from '../components/Aside.js'
export default function Way() {
	return (
		<>
			<Head>
				<title>My way | diasqazaqbro</title>
			</Head>
			<main className='main'>
				<Aside />
				<div className='about'>
					<div className='roww'>
						<header className='header'>
							<div className='inner'>
								<span className='page1'>home/</span>
								<span className='page2'>way</span>
							</div>
						</header>
						<h2 className='title'>Скромный roadmap и путь</h2>
						<p className='text'>
							Тут я описал свой путь и ближайшие планы на будущее
						</p>
					</div>
				</div>
			</main>
		</>
	)
}
