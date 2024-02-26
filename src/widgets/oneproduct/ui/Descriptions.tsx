import styles from '@/shared/styles/OneProduct.module.scss'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/ui'
import { FC } from 'react'
const Descriptions: FC<{ description: string }> = ({ description }) => (
	<Accordion type='single' collapsible>
		<AccordionItem value='item-1'>
			<AccordionTrigger
				className={styles.oneProduct__content__description__trigger}
			>
				детали о продукте
			</AccordionTrigger>
			<AccordionContent
				className={styles.oneProduct__content__description__acardcontent}
			>
				{description}
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value='item-2'>
			<AccordionTrigger
				className={styles.oneProduct__content__description__trigger}
			>
				материалы производства
			</AccordionTrigger>
			<AccordionContent
				className={styles.oneProduct__content__description__acardcontent}
			>
				Мы постоянно обновляем наш ассортимент, чтобы предложить вам самые
				свежие и актуальные модели. Мы уверены, что каждый найдет у нас что-то
				по своему вкусу. Добро пожаловать в мир оверсайз и кэжуал стиля! Мы рады
				приветствовать вас на нашем сайте, где вы найдете самые модные и удобные
				вещи для вашего гардероба.
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value='item-3'>
			<AccordionTrigger
				className={styles.oneProduct__content__description__trigger}
			>
				Доставка
			</AccordionTrigger>
			<AccordionContent
				className={styles.oneProduct__content__description__acardcontent}
			>
				Самомвывоз по адресу: г. Элиста, 7 микрорайон, дом 1
			</AccordionContent>
		</AccordionItem>
	</Accordion>
)

export default Descriptions
