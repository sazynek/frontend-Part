import { Container } from '../../components/Container'
// import { StatMyTItle } from '../../components/StatTItle'

// const statData = []

export const Stat = () => {
	return (
		<div
			style={{
				backgroundImage: 'url("BG-ping.png")',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			className='h-full'
		>
			<Container>
				<div className='text-red-500'>g</div>
			</Container>
		</div>
	)
}
