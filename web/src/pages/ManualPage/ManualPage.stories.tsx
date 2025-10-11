import type { Meta, StoryObj } from '@storybook/react'

import ManualPage from './ManualPage'

const meta: Meta<typeof ManualPage> = {
  component: ManualPage,
}

export default meta

type Story = StoryObj<typeof ManualPage>

export const Primary: Story = {}
