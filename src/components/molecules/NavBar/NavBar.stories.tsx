import React from 'react';
import Navbar, { NavbarProps } from './NavBar';

export default {
    title: "Navbar",
    component: Navbar
};

export const Default = (props: NavbarProps) => <Navbar {...props} />;
