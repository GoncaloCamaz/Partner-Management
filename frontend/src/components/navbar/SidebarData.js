import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'My Profile',
    path: '/profile',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Partnerships',
    path: '/partnerships',
    icon: <FaIcons.FaHandshake />,
    cName: 'nav-text'
  },
  {
    title: 'Payments',
    path: '/payments',
    icon: <FaIcons.FaMoneyBillWave />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <FaIcons.FaLongArrowAltRight />,
    cName: 'nav-text'
  },
];

export const SidebarDataAdmin = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'My Profile',
        path: '/profile',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
      },
      {
        title: 'Associates',
        path: '/associates',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
      },
      {
        title: 'Groups',
        path: '/groups',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
      },
      {
        title: 'Partnerships',
        path: '/partnerships',
        icon: <FaIcons.FaHandshake />,
        cName: 'nav-text'
      },
      {
        title: 'Payments',
        path: '/payments',
        icon: <FaIcons.FaMoneyBillWave />,
        cName: 'nav-text'
      },
      {
        title: 'Settings',
        path: '/settings',
        icon: <FaIcons.FaWrench />,
        cName: 'nav-text'
      },
      {
        title: 'Logout',
        path: '/',
        icon: <FaIcons.FaLongArrowAltRight />,
        cName: 'nav-text'
      },
  ];