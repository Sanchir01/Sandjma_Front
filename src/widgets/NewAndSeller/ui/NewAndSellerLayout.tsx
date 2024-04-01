import { FC, ReactNode } from 'react'
export interface INewAndSellerLayout {
	seller?: ReactNode
	newProduct?: ReactNode
}
const NewAndSellerLayout: FC<INewAndSellerLayout> = ({
	seller,
	newProduct
}) => {
	const a = ''
	return (
		<div className='pt-10'>
			{seller} {newProduct}
		</div>
	)
}

export default NewAndSellerLayout
