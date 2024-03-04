import { FC } from 'react'
import NewAndSellerLayout from './ui/NewAndSellerLayout'
import NewSlider from './ui/NewSlider'
import SellerSlider from './ui/SellerSlider'

const NewAndSeller: FC = () => (
	<NewAndSellerLayout seller={<SellerSlider />} newProduct={<NewSlider />} />
)

export default NewAndSeller
