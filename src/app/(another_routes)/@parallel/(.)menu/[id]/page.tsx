import { ModalMenu } from '../../../../../components/ModalMenu'

export default async function ParallelFunc(a: {
	params: { id: string }
	searchParams: { id: string }
}) {
	const param = await a.params
	const searchParams = await a.searchParams

	return (
		<ModalMenu
			isModal={true}
			param={param.id}
			searchParams={searchParams.id}
		/>
	)
}
