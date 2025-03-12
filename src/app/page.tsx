'use client'
import React from 'react';

import CustomBarChart from './components/BarChart';
import DoughnutChart from "./components/DoughnutChart";
import Overview from './components/Overview';
import { Bell, Search, ArrowUpRight, LayoutDashboard, ArrowRightLeft, Wallet, Target, HandCoins, ChartNoAxesCombined, Settings, CircleHelp, LogOut, ArrowLeftCircle, MenuIcon, UserCircleIcon } from 'lucide-react';

import { Sidebar, Menu, MenuItem,  } from 'react-pro-sidebar';

import { useRouter } from 'next/navigation';



export default function Home() {
      const router = useRouter();
    
      const [collapsed, setCollapsed] = React.useState(false);
      const [toggled, setToggled] = React.useState(false);

  return (
    <>
    <div className="flex">
        {/* Pindah sidebar */}
        <Sidebar
            backgroundColor='#f3e8ff'
            width='200px'
            collapsed={collapsed}
            collapsedWidth='100px'
            onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="lg"
            >
            <div className="text-3xl font-bold mb-8 text-center">LOGO</div>
            <div className='flex justify-end'>
            <button className='sb-button' onClick={() => setCollapsed(!collapsed)} >
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
        {/* Pindah sidebar */}
        
        {/* Toggle button dark/light mode sebelum close div */}
        <main className="flex-1 sm:p-8 p-5">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <div className='lg:text-lg text-xs'>
                    {/* button utk menu mobile show hide */}
                    <button className=' flex p-1 lg:sr-only rounded-2xl w-15 bg-purple-500 text-white btn-tog' onClick={() => setToggled(!toggled)}>
                        <MenuIcon className='inline-flex lg:size-6 size-4' />
                        Menu
                        </button>
                    {/* button utk menu mobile show hide */}
                    <h1 className="sm:text-2xl text-lg font-semibold">Welcome back, Rido Amali!</h1>
                    <p className="text-gray-500 text-xs sm:text-lg">It is the best time to manage your finances</p>
                </div>
                <div className="flex items-center sm:space-x-4">
                    <Search className='md:size-10' />
                    <Bell className='md:size-10' />
                    <UserCircleIcon className='md:hidden' />
                    <div className="hidden md:block items-center space-x-2">
                        {/* tambahkan avatar */}
                        <div className='border-1 rounded-4xl sm:w-40 sm:h-14 p-2 sm:pl-4 shadow-lg border-zinc-300'>
                            <p className="font-semibold">Rido A.</p>
                            <p className="text-gray-500 text-sm">masdo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header */}
        {/* Overview */}
        <Overview />
        {/* END Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:grid-flow-col">
                {/* Money Flow */}  
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1 lg:col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Money flow</h2>
                        <div className="flex items-center space-x-2">
                            <select className="border rounded px-2 py-1">
                                <option>All accounts</option>
                            </select>
                            <select className="border rounded px-2 py-1">
                                <option>This year</option>
                            </select>
                        </div>
                    </div>
                    {/* Bar Chart */}
                    <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Income vs Expense (Jan - Jun)</h1>
                    <CustomBarChart />
                    {/* Bar Chart */}
                    </div>
                </div>
                {/* END Money Flow */}
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1 lg:col-span-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Budget</h2>
                        <ArrowUpRight />
                    </div>
                    {/* Doughnut cart */}
                    <div className="">
                    <DoughnutChart />
                    </div>
                </div>
            </div>
        </main>
    </div>
    </>
  );
}
