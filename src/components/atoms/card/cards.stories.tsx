import React from 'react'
import Card, { CardProps } from './card'

export default {
  title: 'Card',
  component: Card
}

export const Default = (props: CardProps) => <Card {...props} />
