import React from 'react'
import Skills, { SkillsProps } from './skills'

export default {
  title: 'Skills',
  component: Skills,
}

export const Default = ({ spells }: SkillsProps) => <Skills spells={spells} />
