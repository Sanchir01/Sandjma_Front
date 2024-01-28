import { render } from '@testing-library/react'
import { ToggleTheme } from './toggle-theme'

describe('Toggle theme', () => {
	it('Toggle', async () => {
		render(<ToggleTheme />)
	})
})
