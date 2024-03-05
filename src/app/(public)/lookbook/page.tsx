import fashion1 from '@/shared/images/lookbook/bg.jpg'
import fashion2 from '@/shared/images/lookbook/fashion/1.jpg'
import fashion3 from '@/shared/images/lookbook/fashion/2.jpg'
import fashion4 from '@/shared/images/lookbook/fashion/3.jpg'
import fashion5 from '@/shared/images/lookbook/fashion/4.jpg'
import fashion6 from '@/shared/images/lookbook/fashion/5.jpg'
import styles from '@/shared/styles/LookBook.module.scss'
import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
	title: 'Lookbook',
	description: 'LookBook'
}

export default function LookBookPage() {
	return (
		<>
			<section className={styles.hero}>
				<div className='flex justify-center items-center flex-col pt-[30vh]'>
					<h1 className={styles.hero__title}>Sandjma </h1>
					<div className={styles.hero__description}>LookBook Classic</div>
				</div>
			</section>
			<section className={styles.fashion}>
				<div className='container'>
					<h2 className={styles.fashion__title}>
						Далеко-далеко за словесными горами в стране гласных и согласных,
						живут рыбные тексты. Домах правилами которой даль о, переулка, ее но
						заглавных за переписывается толку инициал пустился одна диких путь
						ручеек дал заманивший.
					</h2>
					<div className={styles.fashion__top}>
						<div className='w-[400px] h-auto mt-[100px]'>
							<Image
								className=''
								src={fashion1}
								alt='bg'
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<div className='w-[400px] h-auto '>
							<Image
								className=''
								src={fashion2}
								alt='bg'
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<div className='w-[400px] h-auto mt-[100px] '>
							<Image
								className=''
								src={fashion3}
								alt='bg'
								style={{ objectFit: 'cover' }}
							/>
						</div>
					</div>
					<div className={styles.fashion__bottom}>
						<div className='flex gap-10 w-full justify-evenly'>
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
			<section>
				<Image src={fashion6} alt='bg' style={{ objectFit: 'cover' }} />
			</section>
		</>
	)
}
