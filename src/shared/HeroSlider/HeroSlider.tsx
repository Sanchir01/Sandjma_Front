import { Navigation } from 'swiper/modules'
import { FC } from 'react'
import 'swiper/css/navigation'
import Link from 'next/link'
import { HeroSliderContent } from '../constants/header_content'
import styles from '@/Hero.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

export const HeroSlide: FC = () => {
	return (
		<section className='{styles.hero}'>
			<Swiper
				modules={[Navigation]}
				navigation
				loop
				autoplay={{
					delay: 1500
				}}
			>
				{HeroSliderContent.map(content => (
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
