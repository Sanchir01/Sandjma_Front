import React from 'react'

import Image from 'next/image'
import { IOneProduct } from '@/shared/types/Slider.interface'

import styles from '@/shared/styles/OneProduct.module.scss'

export const ImageOneProduct: React.FC<IOneProduct[]> = images => {
	console.log(images)
	return (
		<div>
			{/* <div className={styles.oneproduct__images}>
				{images.map((image, i) => (
					<Image src={image} key={i} alt='картинка' width={480} height={480} />
				))}
			</div> */}
		</div>
	)
}
