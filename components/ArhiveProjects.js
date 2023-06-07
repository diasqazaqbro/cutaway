export default function ArhiveProjects() {
	return (
		<div class='project__list mb-5'>
			<div
				class='accordion my-2'
				style={{ background: '#121212' }}
				id='accordionExample'
			>
				<div class='accordion-item' style={{ background: '#121212' }}>
					<h2
						class='accordion-header'
						style={{ background: '#121212' }}
						id='headingTwo'
					>
						<button
							class='border accordion-button'
							style={{ background: '#121212', color: '#1976D2' }}
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='true'
							aria-controls='collapseOne'
						>
							New Viva
						</button>
					</h2>
					<div
						id='collapseThree'
						style={{ background: '#121212' }}
						class='accordion-collapse collapse'
						aria-labelledby='headingTwo'
						data-bs-parent='#accordionExample'
					>
						<div
							class='accordion-body'
							style={{
								background: '#212425',
								borderBottomRightRadius: 10,
								borderBottomLeftRadius: 10,
							}}
						>
							Сайт разработан и написан на Php. Был сделан заказ вживую.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
