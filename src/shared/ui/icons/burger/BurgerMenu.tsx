import { useBurger } from '@/app/store/useBurger'

export const BurgerIcon = () => {
	const burger = useBurger(state => state.toggleBurger)
	return (
		<div className={burger ? 'burger_btn active' : 'burger_btn '}>
			<span />
		</div>
	)
}
