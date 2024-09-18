import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ButtonCustom} from './ButtonCustom';

const meta: Meta<typeof ButtonCustom> = {
  component: ButtonCustom,
};

export default meta;

type Story = StoryObj<typeof ButtonCustom>;

export const Basic: Story = {args: {}};
