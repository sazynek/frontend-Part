'use client'
import { Drawer } from 'antd'
import { useState } from 'react'
import { useCart } from '../store/store'
import { MyCard } from './MyCard'

export const Cart = () => {
	const { cartItem } = useCart(select => select)
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
				{cartItem?.map(item => {
					return (
						<div
							className='mt-10 first:mt-0'
							key={item.id}
						>
							<MyCard
								deleteItem
								cost={item?.cost}
								famous={item.famous}
								id={item.id}
								imgUrl={item.imgUrl}
								title={item.title}
								alt={item.alt}
								index={item.index}
								key={item.id}
								isCart={true}
								praiseStatus={item.praiseStatus ?? ''}
								rating={item.rating}
								time={item.time}
							/>
						</div>
					)
				})}
			</Drawer>
		</div>
	)
}
