import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {CardCustom} from './CardCustom';

const meta: Meta<typeof CardCustom> = {
  component: CardCustom,
};

export default meta;

type Story = StoryObj<typeof CardCustom>;

export const Basic: Story = {args: {}};
