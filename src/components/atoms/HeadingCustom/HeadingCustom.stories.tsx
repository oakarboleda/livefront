import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {HeadingCustom} from './HeadingCustom';

const meta: Meta<typeof HeadingCustom> = {
  component: HeadingCustom,
};

export default meta;

type Story = StoryObj<typeof HeadingCustom>;

export const Basic: Story = {args: {}};
