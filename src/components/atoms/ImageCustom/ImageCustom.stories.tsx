import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ImageCustom} from './ImageCustom';

const meta: Meta<typeof ImageCustom> = {
  component: ImageCustom,
};

export default meta;

type Story = StoryObj<typeof ImageCustom>;

export const Basic: Story = {args: {}};
