import Head from 'next/head'
import Aside from '../components/Aside.js'
import CardComponent from '../components/CardComponent.js'
export default function Home() {
	return (
		<>
			<Head>
				<title>About | diasqazaqbro</title>
			</Head>
			<main className='main'>
				<Aside />
				<div className='about'>
					<div className='roww'>
						<header className='header'>
							<div className='inner'>
								<span className='page1'>home/</span>
								<span className='page2'>about</span>
							</div>
						</header>
						<h2 className='title'>Разработка Frontend на React</h2>
						<p className='text'>
							Я - Junior Frontend Web Разработчик. Иногда занимаюсь графическим
							дизайном и простыми анимациями.
							<br />
							Для работы предпочитаю использовать Windows, мой основной
							компьютер - HP ENVY X360 (I5 11th).
							<br />
							<br />
							Пишу код в редакторе Visual Studio Code. Для дизайна
							пользовательских интерфейсов использую в основном Figma, иногда
							для графического дизайна использую Adobe Photoshop, Adobe
							Illustrator и Adobe After Effects для создания простых анимаций.
						</p>

						<CardComponent />
					</div>
				</div>
			</main>
		</>
	)
}
