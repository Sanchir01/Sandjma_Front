export const BurgerIcon = ({ rotate }: { rotate: boolean }) => {
	return (
		<div className={rotate ? 'burger_btn active' : 'burger_btn '}>
			<span  />
		</div>
	)
}
