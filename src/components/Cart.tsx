'use client'
import { Drawer } from 'antd'
import { useState } from 'react'
import { useSome } from '../store/store'
import { MyCard } from './MyCard'

export const Cart = () => {
	const { bears } = useSome()
	const [open, setOpen] = useState<boolean>(false)
	return (
		<div>
			<button
				onClick={() => setOpen(!open)}
				className='bg-pink-600 p-5 text-orange-500'
			>
				{' '}
				hhhh
			</button>
			<Drawer
				open={open}
				onClose={() => setOpen(false)}
			>
				{bears.map(item => (
					<div key={item}>
						<MyCard
							cost={5}
							famous='3'
							id='2'
							imgUrl='article0.png'
							onClick={() => 2}
							title="So if there is a bad outcome, it's my bad outcome."
							alt='card'
							index='5'
							key={'any'}
							mark={true}
							praiseStatus='bay'
							userLike={true}
							rating='5'
							time='3'
						/>
						{item}
					</div>
				))}
			</Drawer>
		</div>
	)
}
