'use client'
import styles from '@/shared/styles/Slider.module.scss'
import { cn } from '@/shared/utils/utils'
import Image from 'next/image'
import { FC, useState } from 'react'
const ImagesGallery: FC<{ images: string[] }> = ({ images }) => {
	const [indexImages, setIndexImages] = useState(0)
	return (
		<Image
			onMouseMove={() => setIndexImages(1)}
			onMouseLeave={() => setIndexImages(0)}
			className={cn(styles.slider__imageBlock__image, ' transition')}
			src={images[indexImages]}
			alt={images[indexImages]}
			width={400}
			height={400}
		/>
	)
}

export default ImagesGallery
