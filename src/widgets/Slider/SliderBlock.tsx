import { ISliderBlockProduct } from '@/shared/types/Slider.interface'
import { SliderDefault } from '@/shared/ui'
import { FC } from 'react'

export const SliderBlock: FC<ISliderBlockProduct> = ({ product }) => {
	return (
		<SliderDefault
			priority={true}
			className={'max-w-[430px] flex flex-col gap-2'}
			products={product}
			slidesPerView={4}
			loop
		></SliderDefault>
	)
}
