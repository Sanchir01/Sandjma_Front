import { ToggleTheme } from '@/features/themesToggle/toggle-theme'
import { FavoritesLogo } from '@/shared/icons/favorites'
import { LayoutHeader } from '@/widgets/header/ui/HeaderLayout'
import HeaderLogo from '@/widgets/header/ui/HeaderLogo'
import HeaderNav from '@/widgets/header/ui/HeaderNav'
import { HeaderProfile } from '@/widgets/header/ui/HeaderProfile'
import { FC } from 'react'
import ShoppingCartHeader from '../cart/Cart'
export enum HeaderProfileEnum {
	PRIVATE = 'private',
	AUTH = 'auth',
	PUBLIC = 'public'
}

export const Header: FC<{ variant: HeaderProfileEnum }> = ({ variant }) => (
	<LayoutHeader
		logo={<HeaderLogo />}
		nav={<HeaderNav />}
		profile={variant === HeaderProfileEnum.AUTH ? <></> : <HeaderProfile />}
		actions={
			<>
				
				<FavoritesLogo />
				<ToggleTheme />
			</>
		}
	/>
)
