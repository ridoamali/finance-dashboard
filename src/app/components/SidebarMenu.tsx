'use client'

import React from 'react';
import { Sidebar, Menu, MenuItem,  } from 'react-pro-sidebar';
import { LayoutDashboard, ArrowRightLeft, Wallet, Target, HandCoins, ChartNoAxesCombined, Settings, CircleHelp, LogOut, ArrowLeftCircle } from "lucide-react";

import { useRouter } from 'next/navigation';


const SidebarMenu: React.FC = () => {
  const router = useRouter();

  return (
    <>
    <Sidebar
    backgroundColor='#f3e8ff'
    width='225px'
    >
    <div className="text-3xl font-bold mb-8 text-center">LOGO</div>
    <div className='flex justify-end'>
    <button>
      <ArrowLeftCircle size={25} className='bg-purple-500 text-white rounded-full'/>
    </button>
    </div>
        <Menu className='text-sm p-4 mt-14'>
            <MenuItem icon={<LayoutDashboard size={20} />} onClick={() => router.push('/')} className='h-8'>Dashboard</MenuItem>
            <MenuItem icon={<ArrowRightLeft size={20} />} onClick={()=> router.push('/transactions')} className='h-8'>Transactions</MenuItem>
            <MenuItem icon={<Wallet size={20} />} onClick={() => router.push('/wallet')} className='h-8'>Wallet</MenuItem>
            <MenuItem icon={<Target size={20} />} onClick={() => router.push('/goals')} className='h-8'>Goals</MenuItem>
            <MenuItem icon={<HandCoins size={20} />} onClick={() => router.push('/budget')} className='h-8'>Budget</MenuItem>
            <MenuItem icon={<ChartNoAxesCombined size={20} />} onClick={() => router.push('/analytics')} className='h-8'>Analytics</MenuItem>
            <MenuItem icon={<Settings size={20} />} onClick={() => router.push('/settings')} className='h-8'>Settings</MenuItem>
        </Menu>
      
        <div className="mt-16 text-sm p-4">
        <Menu>
        <MenuItem icon={<CircleHelp size={20} />} onClick={() => router.push('/help')} className='h-8'>Help</MenuItem>
        <MenuItem icon={<LogOut size={20} />} onClick={() => router.push('/logout')} className='h-8'>Log Out</MenuItem>
        </Menu>
        </div>
      
    </Sidebar>
    </>
  );
};

export default SidebarMenu;