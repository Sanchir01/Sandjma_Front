import { FC } from 'react'
import CartContent from './ui/Cart_Content'
import LayoutCart from './ui/Layout_cart'

const ShoppingCartHeader: FC = () => <LayoutCart content={<CartContent />} />

export default ShoppingCartHeader
