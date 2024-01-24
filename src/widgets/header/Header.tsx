import { ToggleTheme } from '@/features/themesToggle/toggle-theme'
import { FavoritesLogo } from '@/shared/icons/favorites'
import { LayoutHeader } from '@/widgets/header/ui/HeaderLayout'
import HeaderLogo from '@/widgets/header/ui/HeaderLogo'
import HeaderNav from '@/widgets/header/ui/HeaderNav'
import { HeaderProfile } from '@/widgets/header/ui/HeaderProfile'
import { FC } from 'react'

export const Header: FC<{ children?: React.ReactNode }> = () => {
	return (
		<LayoutHeader
			logo={<HeaderLogo />}
			nav={<HeaderNav />}
			profile={<HeaderProfile />}
			actions={
				<>
					<FavoritesLogo />
					<ToggleTheme />
				</>
			}
		/>
	)
}
