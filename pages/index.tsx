import Aside from '@/components/Aside'
import { Button, Card, Progress } from 'antd'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
	const [loading, setLoading] = useState(true)

	setTimeout(() => {
		setLoading(false)
	}, 1500)
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
						<Card style={{ width: '100%', marginTop: 16 }} loading={loading}>
							<div className='flex'>
								<div className='circle'>
									<Progress percent={65} type='circle' size={85} />
									<img className='logo' src='/reactLogo.png' />
								</div>
								<div className=''>
									<h2 className='title'>Разработка Frontend на React</h2>
									<p className='text'>
										Моя основная специализация. Я использовал React с 2019 года
										и с недавнего времени использую Next.js, т.к она дает SSR
										рендеринг со стороны сервера При вёрстке интерфейсов
										использую БЭМ, Flexbox, а если придётся, то и Grid.Стараюсь
										соблюдать гайдлайны семантической вёрстки.
									</p>
									<h2 className='suptitle'>Релевантные навыки</h2>
									<div className='list'>
										<Button type='primary'>HTML5</Button>
										<Button type='primary'>JavaScript (ES2021)</Button>
										<Button type='primary'>React</Button>
										<Button type='primary'>Redux </Button>
										<Button type='primary'>CSS3 (Flexbox, Grid</Button>
										<Button type='primary'>Next.js</Button>
										<Button type='primary'>SPA</Button>
										<Button type='primary'>PWA</Button>
										<Button type='primary'>Sass, Scss, AntD</Button>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</main>
		</>
	)
}
