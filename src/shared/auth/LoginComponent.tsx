import { FC } from 'react'
import { LoginProps } from '../../types/types'
import { Sign } from '../../components/Sign'
import { BigTitle } from '../../components/BigTitle'
import { GoogleSign } from '../../components/GoogleSign'
import clsx from 'clsx'

export const LoginComponent: FC<LoginProps> = ({
	className,
	title,
	btnTitle,
	LogOrSignup,
	...rest
}) => {
	return (
		<div className={clsx(className)}>
			<BigTitle
				className='-mb-8'
				center='center'
				size={42}
				title={title}
				wordSelect='eatly'
			/>
			<GoogleSign />
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
