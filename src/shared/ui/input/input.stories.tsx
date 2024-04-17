import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
	args: {
		className: 'flex gap-3',
		placeholder: '',
		suffix: <div>Иконка</div>,
		type: ''
	}
}
