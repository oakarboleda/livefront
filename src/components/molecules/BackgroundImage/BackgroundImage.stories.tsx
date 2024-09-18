import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {BackgroundImage} from './BackgroundImage';

const meta: Meta<typeof BackgroundImage> = {
  component: BackgroundImage,
};

export default meta;

type Story = StoryObj<typeof BackgroundImage>;

export const Basic: Story = {args: {}};
