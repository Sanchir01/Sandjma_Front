import { Meta } from '@/shared/ui'
import { Form } from '@/widgets/Form'
import { FC } from 'react'

export const Auth: FC = () => {
	return (
		<Meta
			title='Auth'
			description='Пройдите авторизацию в магазин одежды Sandjma'
		>
			<Form />
		</Meta>
	)
}
