import { Meta, StoryFn } from '@storybook/react'
import { SpellCard, SpellCardProps } from './SpellCard'
import React from 'react'
import { Spell } from '@/types/spell'

export default {
  title: 'Molecules/SpellCard',
  component: SpellCard,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    spell: {
      index: '1',
      name: 'Magic Missile',
      level: 1,
      school: { name: 'Evocation', level: 1 },
      casting_time: '1 action',
      range: '120 feet',
      components: ['V', 'S'],
      duration: 'Instantaneous',
    } as Spell,
  },
} satisfies Meta<typeof SpellCard>

const Template: StoryFn<typeof SpellCard> = (args: SpellCardProps) => <SpellCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  spell: {
    index: '1',
    name: 'Magic Missile',
    level: 1,
    school: { name: 'Evocation', level: 1 },
    casting_time: '1 action',
    range: '120 feet',
    components: ['V', 'S'],
    duration: 'Instantaneous',
    attack_type: '',
    concentration: true,
    ritual: true,
    area_of_effect: { size: 30, type: 'type' },
    material: '',
    desc: [
      'You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.',
    ],
    higher_level:
      'When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.',
    classes: { index: '1', level: 1, name: 'Sorcerer', url: '' },
  },
}
