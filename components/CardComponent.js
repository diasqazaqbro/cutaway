import { Button, Card, Progress } from 'antd'
import { useState } from 'react'
const CardComponent = () => {
	const [loading, setLoading] = useState(true)

	setTimeout(() => {
		setLoading(false)
	}, 1500)

	return (
		<>
			<Card style={{ width: '100%', marginTop: 16 }} loading={loading}>
				<div className='flex'>
					<div>
						<Progress percent={65} type='circle' size={85} />
						<img className='logo' src='/reactLogo.png' />
					</div>
					<div className=''>
						<h2 className='title'>Разработка Frontend на React</h2>
						<p className='text'>
							Моя основная специализация. Я использовал React с 2019 года и с
							недавнего времени использую Next.js, т.к она дает SSR рендеринг со
							стороны сервера При вёрстке интерфейсов использую БЭМ, Flexbox, а
							если придётся, то и Grid.Стараюсь соблюдать гайдлайны
							семантической вёрстки.
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
		</>
	)
}

export default CardComponent
