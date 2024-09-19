import React from 'react';
import Cardheader, { CardheaderProps } from './CardHeader';

export default {
    title: "Cardheader",
    component: Cardheader
};

export const Default = (props: CardheaderProps) => <Cardheader {...props} />;
