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
		<div className='flex flex-col gap-[120px] py-[50px] max-[768px]:gap-[50px]'>
			{seller} {newProduct}
		</div>
	)
}

export default NewAndSellerLayout
