import React from 'react';
import Spellimage, { SpellimageProps } from './SpellImage';

export default {
    title: "Spellimage",
    component: Spellimage
};

export const Default = (props: SpellimageProps) => <Spellimage {...props} />;
