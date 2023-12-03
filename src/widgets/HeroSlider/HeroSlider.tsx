import { BGContent } from '@/shared/constants/header_content'
import styles from '@/shared/styles/Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const HeroSlider: FC = () => {
	return (
		<section className={styles.hero}>
			<Swiper loop>
				{BGContent.map(content => (
					<SwiperSlide key={content.id}>
						<Link href={content.href} className={styles.hero__slide__link}>
							<Image
								src={content.image}
								alt={content.image}
								className={styles.hero__slide}
								width={0}
								height={0}
								sizes='100vw'
								style={{ width: '100%', height: 'auto' }}
							/>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default HeroSlider
