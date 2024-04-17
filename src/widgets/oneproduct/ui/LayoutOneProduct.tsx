'use client'
import React, { ReactNode } from 'react'

import styles from '@/shared/styles/OneProduct.module.scss'
import { IOneProduct } from '@/shared/types/Slider.interface'
import { cn } from '@/shared/utils/utils'

export interface IProductPage extends IOneProduct {
	categoryId: string
	description: string
}

export interface ILayoutOneProduct {
	Actions?: ReactNode
	Descriptions?: ReactNode
	ImageGallery?: ReactNode
	SimilarSlider?: ReactNode
	NameAndPrice?: ReactNode
	Breadcrumbs?: ReactNode
}
export const LayoutOneProduct: React.FC<ILayoutOneProduct> = ({
	Actions,
	Descriptions,
	ImageGallery,
	SimilarSlider,
	NameAndPrice,
	Breadcrumbs
}) => (
	<div className={styles.oneProduct}>
		<div className='wrapper'>
			<div className={styles.oneProduct__wrapper}>
				{ImageGallery}
				<div className='min-[576px]:p-5'>
					<div className={styles.oneProduct__right}>
						<div className={'flex flex-col gap-[10px]'}>
							{Breadcrumbs}
							{NameAndPrice}
							{Actions}
						</div>

						<div className={cn('w-[400px]', styles.oneProduct__description)}>
							{Descriptions}
						</div>
					</div>
				</div>
			</div>
			{SimilarSlider}
		</div>
	</div>
)
