// components/Sidebar.tsx
import React from 'react';
import { Sidebar, Menu, MenuItem  } from 'react-pro-sidebar';
import { LayoutDashboard, ArrowRightLeft, Wallet, Target, HandCoins, ChartNoAxesCombined, Settings, CircleHelp, LogOut } from "lucide-react";

import { useRouter } from 'next/navigation';

const SidebarMenu: React.FC = () => {
  const router = useRouter();

  const handleMenuItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
    <Sidebar className={`bg-purple-200 w-64`}>
    <div className="text-3xl font-bold mb-8">LOGO</div>
        <Menu>
            <MenuItem icon={<LayoutDashboard size={25} />} onClick={() => handleMenuItemClick('/privacy')}>Dashboard</MenuItem>
            <MenuItem icon={<ArrowRightLeft size={25} />} onClick={() => handleMenuItemClick('/transactions')}>Transactions</MenuItem>
            <MenuItem icon={<Wallet size={25} />} onClick={() => handleMenuItemClick('/wallet')}>Wallet</MenuItem>
            <MenuItem icon={<Target size={25} />} onClick={() => handleMenuItemClick('/goals')}>Goals</MenuItem>
            <MenuItem icon={<HandCoins size={25} />} onClick={() => handleMenuItemClick('/goals')}>Budget</MenuItem>
            <MenuItem icon={<ChartNoAxesCombined size={25} />} onClick={() => handleMenuItemClick('/goals')}>Analytics</MenuItem>
            <MenuItem icon={<Settings size={25} />} onClick={() => handleMenuItemClick('/goals')}>Settings</MenuItem>
        </Menu>
      
        <div className="mt-4 space-y-4">
        <Menu>
        <MenuItem icon={<CircleHelp size={25} />} onClick={() => handleMenuItemClick('/goals')}>Help</MenuItem>
        <MenuItem icon={<LogOut size={25} />} onClick={() => handleMenuItemClick('/goals')}>Log Out</MenuItem>
        </Menu>
        </div>
      
    </Sidebar>
    </>
  );
};

export default SidebarMenu;