'use client'
import { SliderDefault } from '@/shared/SliderCore/Slider'
import { useMediaQuery } from '@/shared/hooks'
import styles from '@/shared/styles/OneProduct.module.scss'
import Image from 'next/image'
import { FC } from 'react'
import { SwiperSlide } from 'swiper/react'
const ImageGallery: FC<{ images: string[] }> = ({ images }) => {
	const isMedia1024 = useMediaQuery('(max-width:1024px)')

	return isMedia1024 ? (
		<div className='flex justify-center items-center'>
			<SliderDefault
				bullets
				centerSlide={true}
				BreakIsExist={false}
				slidesPerView={1}
				spaceBetween={15}
			>
				{images.map((image, i) => (
					<SwiperSlide key={i}>
						<Image
							src={image}
							alt={image}
							width={480}
							height={480}
							draggable
							priority
							style={{ width: '100dvh', height: 'auto' }}
						/>
					</SwiperSlide>
				))}
			</SliderDefault>
		</div>
	) : (
		<div className={styles.oneProduct__images}>
			{images.map((image, i) => (
				<Image
					src={image}
					key={i}
					alt='картинка'
					width={480}
					height={480}
					draggable
					priority
				/>
			))}
		</div>
	)
}

export default ImageGallery
