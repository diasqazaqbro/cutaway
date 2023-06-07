import Link from 'next/link'

export default function Aside() {
	return (
		<aside class='aside'>
			<div class='info'>
				<img
					class='ava'
					src='https://i.ibb.co/VLDFHZy/5o-Zy51uz-Pf-Y.jpg'
					alt='avatar'
				/>
				<div class='nameid'>@diasqazaqbro</div>
				<div class='name'>Adilov Dias</div>
			</div>
			<nav class='nav'>
				<Link className='link' href='/'>
					about
				</Link>
				<Link className='link' href='/qazaqcode'>
					qazaqcode
				</Link>
				<Link className='link' href='/projects'>
					projects
				</Link>
				<Link className='link' href='/way'>
					my way
				</Link>
			</nav>
			<div class='social'>
				<a href='https://www.instagram.com/diasqazaqbro/'>
					<img
						src='https://img.icons8.com/fluency/48/000000/instagram-new.png'
						alt='insta'
						class='soc-item'
					/>
				</a>
				<a href='https://vk.com/diasqazaqbro'>
					<img
						src='https://img.icons8.com/color/48/000000/vkontakte.png'
						alt='vk'
						class='soc-item'
					/>
				</a>
				<a href='https://twitter.com/joji_blog'>
					<img
						src='https://img.icons8.com/color/48/000000/twitter-squared.png'
						alt='twitter'
						class='soc-item'
					/>
				</a>
			</div>
		</aside>
	)
}
