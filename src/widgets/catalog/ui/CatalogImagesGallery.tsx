'use client'
import { useMediaQuery } from '@/shared/hooks'
import styles from '@/shared/styles/Slider.module.scss'
import { cn } from '@/shared/utils/utils'
import Image from 'next/image'
import { FC, useState } from 'react'
const ImagesGallery: FC<{ images: string[]; focusImage?: boolean }> = ({
	images,
	focusImage = false
}) => {
	const [indexImages, setIndexImages] = useState(0)
	const isMedia992 = useMediaQuery('(min-width:992px)')
	return isMedia992 && focusImage ? (
		<Image
			onMouseMove={() => setIndexImages(1)}
			onMouseLeave={() => setIndexImages(0)}
			className={cn(styles.slider__imageBlock__image, ' transition')}
			src={images[indexImages]}
			alt={images[indexImages]}
			width={400}
			height={400}
		/>
	) : (
		<Image
			className={cn(styles.slider__imageBlock__image, ' transition')}
			src={images[0]}
			alt={images[0]}
			width={400}
			height={400}
		/>
	)
}

export default ImagesGallery
