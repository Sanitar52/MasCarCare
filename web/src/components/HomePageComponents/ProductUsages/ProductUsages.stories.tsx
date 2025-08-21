// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/7/writing-stories/args

import type { Meta, StoryObj } from '@storybook/react'

import ProductUsages from './ProductUsages'

const meta: Meta<typeof ProductUsages> = {
  component: ProductUsages,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ProductUsages>

export const Primary: Story = {}
