import { BGContent } from '@/shared/constants/header_content'
import styles from '@/shared/styles/Hero.module.scss'
import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const HeroSlider: FC = () => {
	return (
		<section className={styles.hero}>
			<Swiper
				modules={[Navigation]}
				navigation
				loop
				autoplay={{
					delay: 1500
				}}
			>
				{BGContent.map(content => (
					<SwiperSlide
						key={content.id}
						className={styles.hero__slide}
						style={{ backgroundImage: `url(${content.image})` }}
					>
						<Link href={content.href} className={styles.hero__slide__link}>
							<p className={styles.hero__slide__title}>{content.title}</p>
							<span className={styles.hero__slide__subtitle}>
								{content.subtitle}
							</span>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}
