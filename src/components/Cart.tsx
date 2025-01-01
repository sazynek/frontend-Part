'use client'
import { Drawer, Space } from 'antd'
import { MyCard } from './MyCard'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { IMyCard } from '../types/types'
import { CartFuncAll } from '../store/store'
import { Badge } from 'antd'
import { FaShoppingCart } from 'react-icons/fa'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { formatCurrency } from '../globalFunc/globalFunc'
import { useCookies } from 'react-cookie'

export const Cart = () => {
	const [cookies] = useCookies(['acc_token'])
	const { data: cartItem } = useQuery<Omit<IMyCard, 'onClick'>[]>({
		queryKey: ['product-collections', 'query'],
		queryFn: async () => {
			return (
				await axios.get('http://localhost:3100/product-collections')
			).data
		},
	})

	const { openCartFunc, countCartSum } = CartFuncAll
	const { setSum, sum } = countCartSum()
	const { openCart, setCart } = openCartFunc()
	useEffect(() => {
		const a: number[] = []
		cartItem?.forEach(item => {
			a.push(item.cost + 0.99)
		})
		setSum(a)
	}, [openCart, cartItem, setSum])
	if (cookies['acc_token']) {
		return (
			<div className='relative z-40'>
				<Space
					className='fixed top-10 left-16 cursor-pointer hover:opacity-80 transition-all duration-200'
					onClick={() => setCart(!openCart)}
				>
					<Badge
						count={cartItem?.length ?? 0}
						showZero
						color={'gold'}
					>
						<FaShoppingCart
							className='text-green-700 active:text-green-900 transition-all duration-50'
							size={40}
						/>
					</Badge>
				</Space>

				<Drawer
					open={openCart}
					onClose={() => setCart(false)}
				>
					<AnimatePresence initial={true}>
						{sum > 0 && (
							<motion.div
								key={'sum of cart items'}
								initial={{
									left: 600,
									opacity: 0,
								}}
								animate={{
									background: 'white',
									left: 0,
									opacity: 1,
								}}
								exit={{
									background: 'white',
									left: 600,
									opacity: 0,
								}}
								className=' relative text-3xl text-primary font-black bg-black w-full text-center rounded-lg p-5 shadow-sm shadow-primary '
							>
								{formatCurrency(sum ?? 0)}
							</motion.div>
						)}
					</AnimatePresence>
					{cartItem?.map((item, idx) => {
						if (item.id !== '')
							return (
								<div
									className='mt-10 first:mt-0'
									key={item.id}
								>
									<MyCard
										cartItemId={item.cartItemId ?? ''}
										cost={item?.cost}
										famous={item.famous}
										id={item.id}
										imgUrl={item.imgUrl}
										title={item.title}
										alt={item.alt}
										index={item.index}
										key={idx}
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
	} else {
		return<></>
	}
}
