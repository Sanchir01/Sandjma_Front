import style from './Home.module.scss'

export function HomePage() {
	console.log(process.env.SERVER_URL)
	return (
		<footer className={style.footer__top}>
			<div className={style.footer__wrapper}>123213123</div>
		</footer>
	)
}
