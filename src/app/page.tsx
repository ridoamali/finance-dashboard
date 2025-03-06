'use client'

import CustomBarChart from './components/BarChart';
import DoughnutChart from "./components/DoughnutChart";
import SidebarMenu from "./components/SidebarMenu";
import Overview from './components/Overview';
import { Bell, Search, ArrowUpRight } from 'lucide-react';



export default function Home() {

  return (
    <>
    <div className="flex">      
        <SidebarMenu />
        {/* Toggle button dark/light mode sebelum close div */}
        <main className="flex-1 p-8">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-semibold">Welcome back, Rido Amali!</h1>
                    <p className="text-gray-500">It is the best time to manage your finances</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Search size={40} />
                    <Bell size={40} />
                    <div className="flex items-center space-x-2">
                        {/* tambahkan avatar */}
                        <div className='border-1 rounded-4xl w-40 h-14 p-2 pl-4 shadow-lg  border-zinc-300'>
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
