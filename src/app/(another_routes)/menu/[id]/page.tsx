import { ModalMenu } from '../../../../components/ModalMenu'

export default async function PageMenuId(a: {
	params: { id: string }
	searchParams: { id: string }
}) {
	const param = await a.params
	const searchParams = await a.searchParams

	return (
		<ModalMenu
			isModal={false}
			param={param.id}
			searchParams={searchParams.id}
		/>
	)
}
