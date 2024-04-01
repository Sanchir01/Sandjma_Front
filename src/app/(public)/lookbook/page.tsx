import fashion1 from '@/shared/images/lookbook/bg.jpg'
import fashion2 from '@/shared/images/lookbook/fashion/1.jpg'
import fashion3 from '@/shared/images/lookbook/fashion/2.jpg'
import fashion4 from '@/shared/images/lookbook/fashion/3.jpg'
import fashion5 from '@/shared/images/lookbook/fashion/4.jpg'
import fashion6 from '@/shared/images/lookbook/fashion/5.jpg'
import styles from '@/shared/styles/LookBook.module.scss'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
export const metadata: Metadata = {
	title: 'Lookbook',
	description: 'LookBook'
}

export default function LookBookPage() {
	return (
		<Suspense fallback={<Loading />}>
			<section className={styles.hero}>
				<div className='flex justify-center items-center flex-col pt-[30vh]'>
					<h1 className={styles.hero__title}>Sandjma </h1>
					<div className={styles.hero__description}>LookBook Classic</div>
				</div>
			</section>
			<section className={styles.fashion}>
				<div className='container'>
					<h2 className={styles.fashion__title}>
						{`Коллекция  "sandjma slassic" представляет собой калмыцкую одежду для
						мужчин и женщин. Она воплощает в себе уникальные черты калмыцкого
						стиля, такие как традиционные узоры, материалы и культурное
						значение. В коллекцию входят разнообразные предметы одежды, такие
						как мантии, туники, головные уборы и аксессуары. Особое внимание
						уделено универсальности стилей и включительным дизайнам, делающим
						эту одежду подходящей как для мужчин, так и для женщин.`}
					</h2>
					<div className={styles.fashion__top}>
						<div className='max-w-[400px] h-auto  min-[1440px]:mt-[100px] '>
							<Image
								width={0}
								height={0}
								src={fashion1}
								alt='bg'
								sizes='100vw'
								style={{ width: 'auto' }}
							/>
						</div>
						<div className='max-w-[400px] h-auto '>
							<Image src={fashion2} alt='bg' style={{ objectFit: 'cover' }} />
						</div>
						<div className='max-w-[400px] h-auto min-[1440px]:mt-[100px]'>
							<Image src={fashion3} alt='bg' style={{ objectFit: 'cover' }} />
						</div>
					</div>
					<div className={styles.fashion__bottom}>
						<div className='flex gap-10 w-full justify-evenly max-[768px]:gap-5'>
							<div className=''>
								<Image
									src={fashion4}
									alt='bg'
									width={600}
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className=''>
								<Image
									src={fashion5}
									alt='bg'
									width={600}
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='mt-[100px] max-[768px]:mt-[50px]'>
				<div>
					<Image
						className='mx-auto'
						src={fashion6}
						alt='bg'
						style={{ objectFit: 'cover' }}
					/>
				</div>
			</section>
		</Suspense>
	)
}
