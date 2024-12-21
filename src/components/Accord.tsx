'use client'
import { Collapse, CollapseProps } from 'antd'
import { Container } from './Container'
import { BigTitle } from './BigTitle'
import { FaCheckCircle } from 'react-icons/fa'
import { v4 as uuid } from 'uuid'

const items: CollapseProps['items'] = [
	{
		key: uuid(),
		label: 'Why is my internet connection so slow?',
		children:
			'Slow internet can be caused by several factors including network congestion, outdated hardware, or interference from other devices. Try restarting your router, checking for updates, or contacting your ISP.',
		extra: (
			<FaCheckCircle
				size={30}
				className={`text-primary`}
			/>
		),
	},
	{
		key: uuid(),
		label: 'How do I recover a deleted file?',
		children:
			"To recover a deleted file, check your Recycle Bin or Trash. If it's not there, you can use file recovery software or restore from a backup if you have one.",
		extra: (
			<FaCheckCircle
				size={30}
				className={`text-primary`}
			/>
		),
	},
	{
		key: uuid(),
		label: "What should I do if my phone won't turn on?",
		children:
			"If your phone won't turn on, try charging it for at least 15 minutes. If it still doesn't respond, perform a hard reset by holding down the power button and volume button simultaneously.",
		extra: (
			<FaCheckCircle
				size={30}
				className={`text-primary`}
			/>
		),
	},
	{
		key: uuid(),
		label: "Why am I getting a '403 Forbidden' error on my website?",
		children:
			"A '403 Forbidden' error typically means that access to the resource is restricted. Check your file permissions, .htaccess rules, or consult your hosting provider for assistance.",
		extra: (
			<FaCheckCircle
				size={30}
				className={`text-primary`}
			/>
		),
	},
	{
		key: uuid(),
		label: 'How can I fix a printer that is not connecting?',
		children:
			"If your printer is not connecting, ensure that it's powered on, connected to the same Wi-Fi network, and check for any driver updates. Restarting both the printer and the computer can also help.",
		extra: (
			<FaCheckCircle
				size={30}
				className={`text-primary`}
			/>
		),
	},
	{
		key: uuid(),
		label: 'What is causing my computer to overheat?',
		children:
			"Overheating can be caused by dust buildup, inadequate cooling, or running too many resource-intensive applications. Clean your computer's vents, ensure proper airflow, and monitor CPU usage.",
		extra: (
			<FaCheckCircle
				size={30}
				className={`text-primary`}
			/>
		),
	},
	{
		key: uuid(),
		label: 'How do I change my password on social media?',
		children:
			"To change your password on social media, go to your account settings, find the 'Security' or 'Password' section, and follow the prompts to update your password.",
		extra: (
			<FaCheckCircle
				size={30}
				className={`text-primary`}
			/>
		),
	},
]

export const Accord = () => {
	return (
		<Container className='mb-24'>
			<BigTitle
				size={44}
				title='Frequency Asked labels'
				wordSelect='labels'
				center='center'
				className='text-wrap'
			/>
			<Collapse
				className='font-bold'
				bordered={true}
				items={items}
				defaultActiveKey={['1']}
				accordion
			/>
		</Container>
	)
}
