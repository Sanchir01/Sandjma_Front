import BGImage from '@/shared/images/about/bg.jpg'
import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
	title: 'О нас',
	description: 'Описания Магазина',
	robots: {
		index: true,
		follow: true
	}
}

export default function AboutPage() {
	return (
		<div>
			<div className='flex gap-2'>
				<div className='w-[900px]'>
					<Image
						alt='bg'
						src={BGImage}
						width={undefined}
						height={undefined}
						style={{ height: '100vh' }}
						placeholder='blur'
					/>
				</div>
				<div className=''></div>
			</div>
		</div>
	)
}
