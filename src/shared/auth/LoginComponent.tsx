import { FC } from 'react'
import { LoginProps } from '../../types/types'
import { Sign } from '../../components/Sign'
import { BigTitle } from '../../components/BigTitle'

export const LoginComponent: FC<LoginProps> = ({
	className,
	title,
	btnTitle,
	LogOrSignup,
	...rest
}) => {
	return (
		<div className={className}>
			<BigTitle
				center='center'
				size={42}
				title={title}
				wordSelect='eatly'
			/>
			<div className=''>
				<Sign
					control={rest?.control}
					reset={rest?.reset}
					errors={rest?.errors}
					LogOrSignup={LogOrSignup}
					btnTitle={btnTitle}
				/>
			</div>
		</div>
	)
}
