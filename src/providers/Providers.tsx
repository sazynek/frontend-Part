'use client'
import {
	StyleProvider,
	legacyLogicalPropertiesTransformer,
} from '@ant-design/cssinjs'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider, ConfigProviderProps, GetProp } from 'antd'
import { FC, PropsWithChildren } from 'react'

type WaveConfig = GetProp<ConfigProviderProps, 'wave'>

// Prepare effect holder
const createHolder = (node: HTMLElement) => {
	const { borderWidth } = getComputedStyle(node)
	const borderWidthNum = parseInt(borderWidth, 10)

	const div = document.createElement('div')
	div.style.position = 'absolute'
	div.style.inset = `-${borderWidthNum}px`
	div.style.borderRadius = 'inherit'
	div.style.background = 'transparent'
	div.style.zIndex = '999'
	div.style.pointerEvents = 'none'
	div.style.overflow = 'hidden'
	node.appendChild(div)

	return div
}

const createDot = (
	holder: HTMLElement,
	color: string,
	left: number,
	top: number,
	size = 0,
) => {
	const dot = document.createElement('div')
	dot.style.position = 'absolute'
	dot.style.left = `${left}px`
	dot.style.top = `${top}px`
	dot.style.width = `${size}px`
	dot.style.height = `${size}px`
	dot.style.borderRadius = '50%'
	dot.style.background = color
	dot.style.transform = 'translate(-50%, -50%)'
	dot.style.transition = 'all 1s ease-out'
	holder.appendChild(dot)

	return dot
}

// Inset Effect
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const showInsetEffect: WaveConfig['showEffect'] = (
	node,
	{ event, component },
) => {
	if (component !== 'Button') {
		return
	}

	const holder = createHolder(node)

	const rect = holder.getBoundingClientRect()

	const left = event.clientX - rect.left
	const top = event.clientY - rect.top

	const dot = createDot(holder, 'rgba(255, 255, 255, 0.65)', left, top)

	// Motion
	requestAnimationFrame(() => {
		dot.ontransitionend = () => {
			holder.remove()
		}

		dot.style.width = '200px'
		dot.style.height = '200px'
		dot.style.opacity = '0'
	})
}
// Shake Effect
const showShakeEffect: WaveConfig['showEffect'] = (node, { component }) => {
	if (component !== 'Button') {
		return
	}

	const seq = [0, -15, 15, -5, 5, 0]
	const itv = 10

	let steps = 0

	function loop() {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		cancelAnimationFrame((node as any).effectTimeout)

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		;(node as any).effectTimeout = requestAnimationFrame(() => {
			const currentStep = Math.floor(steps / itv)
			const current = seq[currentStep]
			const next = seq[currentStep + 1]

			if (!next) {
				node.style.transform = ''
				node.style.transition = ''
				return
			}

			// Trans from current to next by itv
			const angle = current + ((next - current) / itv) * (steps % itv)

			node.style.transform = `rotate(${angle}deg)`
			node.style.transition = 'none'

			steps += 1
			loop()
		})
	}

	loop()
}
const query = new QueryClient()

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StyleProvider
			layer
			hashPriority='high'
			transformers={[legacyLogicalPropertiesTransformer]}
		>
			<ConfigProvider
				warning={{ strict: true }}
				button={{ autoInsertSpace: true }}
				typography={{ className: 'text-base ', }}
				wave={{ showEffect: showShakeEffect }}
			>
				<QueryClientProvider client={query}>
					<AntdRegistry layer>{children}</AntdRegistry>
				</QueryClientProvider>
			</ConfigProvider>
		</StyleProvider>
	)
}
