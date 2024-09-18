import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {AvatarImage} from './AvatarImage';

const meta: Meta<typeof AvatarImage> = {
  component: AvatarImage,
};

export default meta;

type Story = StoryObj<typeof AvatarImage>;

export const Basic: Story = {args: {}};
