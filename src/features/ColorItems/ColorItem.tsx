import { IColors } from '@/shared/types/Slider.interface'
import { FC } from 'react'
export interface IColorsItemsProps {
	colors: IColors
}
const ColorItem: FC<IColorsItemsProps> = ({ colors }) => {
	return <div>ColorItem</div>
}

export default ColorItem
