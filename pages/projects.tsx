import Head from 'next/head'
import ArhiveProjects from '../components/ArhiveProjects.js'
import Aside from '../components/Aside.js'
import CurrentProjects from '../components/CurrentProjects.js'

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects | diasqazaqbro</title>
			</Head>
			<main className='main'>
				<Aside />
				<div className='about'>
					<div className='roww'>
						<header className='header'>
							<div className='inner'>
								<span className='page1'>home/</span>
								<span className='page2'>projects</span>
							</div>
						</header>
						<h2 className='title'>Активные</h2>
						<CurrentProjects />
						<h2 className='title'>Архив</h2>
						<ArhiveProjects />
					</div>
				</div>
			</main>
		</>
	)
}
