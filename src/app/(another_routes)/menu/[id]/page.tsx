import { ModalMenu } from '../../../../components/ModalMenu'

export default async function PageMenuId(a: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	params: Promise<any | undefined>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	searchParams: Promise<any | undefined>
}) {
	const param = await a.params
	const searchParams = await a.searchParams

	return (
		<ModalMenu
			isModal={false}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			param={param?.id}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			searchParams={searchParams?.id}
		/>
	)
}
