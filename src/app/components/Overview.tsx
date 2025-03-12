import React from 'react'
import { CalendarDays, Plus, LayoutGrid, ArrowUpRight } from "lucide-react";

const Overview = () => {
  return (
    <>
                {/* Manage WIdget */}
            <div className="flex items-center space-x-4 mb-8 justify-between text-xs sm:text-[16px]">
                <div className="space-x-2 flex">
                <div className="space-x-2 border rounded-2xl px-4 py-2  border-zinc-300">
                    <CalendarDays className='inline-block sm:size-6 size-4' />
                </div>
                <select className="space-x-2 border rounded-2xl px-4 py-2 border-zinc-300">
                   <option value="">This Month</option>
                </select>
                </div>
                <div className="flex justify-end space-x-2">
                <div className="border rounded-2xl px-4 py-2 border-zinc-300 sm:text-[16px] text-[12px]">
                    <LayoutGrid className='inline-flex font-bold sm:size-6 size-4' />
                    Manage widgets
                    </div>
                <div className="bg-purple-500 text-white rounded-2xl px-4 py-2">
                    <Plus className='inline-flex sm:size-6 size-4' />
                    Add new widget
                </div>
                </div>
            </div>
            {/* END Manage WIdget */}
            {/* Summary Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Total balance</h2>
                        
                        <ArrowUpRight />
                        
                    </div>
                    <p className="text-2xl font-bold my-8">Rp. 98.000,00</p>
                    <div className='flex'>
                        <div className='bg-green-100 w-15 h-7 text-center rounded-4xl self-center'>
                    <p className="text-green-500 text-xs mt-2 ">↑ 12,1%</p>
                    </div>
                    <span className="text-green-500 text-xs mt-2 inline-flex ">vs last month</span>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Income</h2>
                        <ArrowUpRight />
                    </div>
                    <p className="text-2xl font-bold my-8">Rp. 86.000,00</p>
                    <div className='flex'>
                        <div className='bg-green-100 w-15 h-7 text-center rounded-4xl self-center'>
                    <p className="text-green-500 text-xs mt-2 ">↑ 12,1%</p>
                    </div>
                    <span className="text-green-500 text-xs mt-2 inline-flex ">vs last month</span>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Expense</h2>
                        <ArrowUpRight />
                    </div>
                    <p className="text-2xl font-bold my-8">Rp. 54.000,00</p>
                    <div className='flex'>
                        <div className='bg-red-100 w-15 h-7 text-center rounded-4xl self-center'>
                    <p className="text-red-500 text-xs mt-2 ">↓ 12,1%</p>
                    </div>
                    <span className="text-red-500 text-xs mt-2 inline-flex ">vs last month</span>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-4xl shadow-lg border-zinc-300 border-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Total savings</h2>
                        <ArrowUpRight />
                    </div>
                    <p className="text-2xl font-bold my-8">Rp. 99.000,00</p>
                    <div className='flex'>
                        <div className='bg-green-100 w-15 h-7 text-center rounded-4xl self-center'>
                    <p className="text-green-500 text-xs mt-2 ">↑ 12,1%</p>
                    </div>
                    <span className="text-green-500 text-xs mt-2 inline-flex ">vs last month</span>
                    </div>
                </div>
            </div>
            {/* END Summary Dashboard */}
    </>
  )
}

export default Overview