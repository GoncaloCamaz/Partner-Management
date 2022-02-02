import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Página Inicial',
        path: '/home',
        visibleForAdmin: true,
        visibleForUser: true,
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Meu Perfil',
        path: '/profile',
        visibleForAdmin: true,
        visibleForUser: true,
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
      },
      {
        title: 'Associados',
        path: '/associates',
        visibleForAdmin: true,
        visibleForUser: false,
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
      },
      {
        title: 'Grupos',
        path: '/groups',
        visibleForAdmin: true,
        visibleForUser: false,
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
      },
      {
        title: 'Parcerias',
        path: '/partnerships',
        visibleForAdmin: false,
        visibleForUser: true,
        icon: <FaIcons.FaHandshake />,
        cName: 'nav-text'
      },
      {
        title: 'Parcerias',
        path: '/admin/partnerships',
        visibleForAdmin: true,
        visibleForUser: false,
        icon: <FaIcons.FaHandshake />,
        cName: 'nav-text'
      },
      {
        title: 'Pagamentos',
        path: '/payments',
        visibleForAdmin: false,
        visibleForUser: true,
        icon: <FaIcons.FaMoneyBillWave />,
        cName: 'nav-text'
      },
      {
        title: 'Pagamentos',
        path: '/admin/payments',
        visibleForAdmin: true,
        visibleForUser: false,
        icon: <FaIcons.FaMoneyBillWave />,
        cName: 'nav-text'
      },
      {
        title: 'Definições',
        path: '/settings',
        visibleForAdmin: true,
        visibleForUser: false,
        icon: <FaIcons.FaWrench />,
        cName: 'nav-text'
      },
      {
        title: 'Terminar Sessão',
        path: '/',
        visibleForAdmin: true,
        visibleForUser: true,
        icon: <FaIcons.FaLongArrowAltRight />,
        cName: 'nav-text'
      },
  ];