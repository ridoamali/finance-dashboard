'use client'

import CustomBarChart from './components/BarChart';
import DoughnutChart from "./components/DoughnutChart";
import SidebarMenu from "./components/SidebarMenu";
import { CalendarDays, Plus, LayoutGrid } from "lucide-react";



export default function Home() {

  return (
    <>
    <div className="flex h-fit">
      {/* Menu sidebar */}
        <SidebarMenu />
        {/* Toggle button dark/light mode sebelum close div */}
      {/* END Menu sidebar */}
        <main className="flex-1 p-8">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-semibold">Welcome back, Rido Amali!</h1>
                    <p className="text-gray-500">It is the best time to manage your finances</p>
                </div>
                <div className="flex items-center space-x-4">
                    <i className="fas fa-search text-xl"></i>
                    <i className="fas fa-bell text-xl"></i>
                    <div className="flex items-center space-x-2">
                        {/* tambahkan avatar */}
                        <div>
                            <p className="font-semibold">Rido A.</p>
                            <p className="text-gray-500 text-sm">masdo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header */}
            {/* Manage WIdget */}
            <div className="flex items-center space-x-4 mb-8 justify-between">
                <div className="space-x-2">
                <button className="space-x-2 border rounded-full px-4 py-2">
                    <CalendarDays className='inline-block' />
                </button>
                <button className="space-x-2 border rounded-full px-4 py-2">
                    This month
                </button>
                </div>
                <div className="justify-end space-x-2">
                <button className="border rounded-full px-4 py-2">
                    <LayoutGrid className='inline-block font-bold' />
                    Manage widgets
                    </button>
                <button className="bg-purple-500 text-white rounded-full px-4 py-2">
                    <Plus className='inline-block' />
                    Add new widget
                </button>
                </div>
            </div>
            {/* END Manage WIdget */}
            {/* Summary Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Total balance</h2>
                        <i className="fas fa-arrow-up text-xl"></i>
                    </div>
                    <p className="text-2xl font-bold">Rp. 98.000,00</p>
                    <p className="text-green-500 mt-2">↑ 12,1% vs last month</p>
                </div>
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Income</h2>
                        <i className="fas fa-arrow-up text-xl"></i>
                    </div>
                    <p className="text-2xl font-bold">Rp. 86.000,00</p>
                    <p className="text-green-500 mt-2">↑ 12,1% vs last month</p>
                </div>
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Expense</h2>
                        <i className="fas fa-arrow-up text-xl"></i>
                    </div>
                    <p className="text-2xl font-bold">Rp. 54.000,00</p>
                    <p className="text-red-500 mt-2">↓ 12,1% vs last month</p>
                </div>
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Total savings</h2>
                        <i className="fas fa-arrow-up text-xl"></i>
                    </div>
                    <p className="text-2xl font-bold">Rp. 99.000,00</p>
                    <p className="text-green-500 mt-2">↑ 12,1% vs last month</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Money Flow */}  
                <div className="bg-white p-4 rounded-lg shadow">
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
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Budget</h2>
                        <i className="fas fa-arrow-up text-xl"></i>
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
