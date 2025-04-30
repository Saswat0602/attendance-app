'use client'

import { useState } from 'react'
import {
    FiClock,
    FiShield,
    FiUsers,
    FiUserPlus,
    FiFileText,
    FiFile,
    FiSettings,
    FiUser,
    FiChevronDown,
    FiChevronUp,
    FiMenu,
    FiChevronRight
} from 'react-icons/fi'
import Link from 'next/link'

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false)
    const [openMenus, setOpenMenus] = useState<string[]>([])

    const toggleMenu = (key: string) => {
        setOpenMenus((prev) =>
            prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
        )
    }

    return (
        <div className={`bg-[#0D1524] text-white transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-80'} h-screen`}>
            <div className="flex justify-between items-center px-5 py-5">
                {!collapsed && <div className="text-2xl font-bold tracking-wide">GMi</div>}
                <button onClick={() => setCollapsed(!collapsed)} className="text-white">
                    {collapsed ? <FiChevronRight size={24} /> : <FiMenu size={24} />}
                </button>
            </div>


            {/* Main Scroll Area */}
            <div className="flex-1 overflow-y-auto space-y-4 px-2">
                <SidebarSection
                    title="Time Management"
                    icon={<FiClock size={22} />}
                    collapsed={collapsed}
                    open={openMenus.includes('time')}
                    onToggle={() => toggleMenu('time')}
                    items={[
                        { icon: <FiClock size={18} />, label: 'Time Entries', href: '#' },
                        { icon: <FiShield size={18} />, label: 'Audit', href: '#' }
                    ]}
                />

                <SidebarSection
                    title="Employee Management"
                    icon={<FiUsers size={22} />}
                    collapsed={collapsed}
                    open={openMenus.includes('employee')}
                    onToggle={() => toggleMenu('employee')}
                    items={[
                        { icon: <FiUsers size={18} />, label: 'Employees', href: '#' },
                        { icon: <FiUserPlus size={18} />, label: 'Onboarding', href: '#' }
                    ]}
                />

                <SidebarSection
                    title="Reports Management"
                    icon={<FiFileText size={22} />}
                    collapsed={collapsed}
                    open={openMenus.includes('reports')}
                    onToggle={() => toggleMenu('reports')}
                    items={[
                        { icon: <FiFile size={18} />, label: 'Manual Reports', href: '#' },
                        { icon: <FiFile size={18} />, label: 'Automated Reports', href: '#' }
                    ]}
                />
            </div>

            {/* Bottom Section */}
            <div className={`border-t border-gray-700 px-4 py-4 flex flex-col space-y-4 ${collapsed ? 'items-center' : ''}`}>
                <Link href="#" className="flex items-center gap-3 text-sm hover:text-gray-300 transition">
                    <FiUser size={18} />
                    {!collapsed && <span>Users</span>}
                </Link>
                <Link href="#" className="flex items-center gap-3 text-sm hover:text-gray-300 transition">
                    <FiSettings size={18} />
                    {!collapsed && <span>System Settings</span>}
                </Link>
            </div>
        </div>
    )

}

function SidebarSection({
    title,
    icon,
    collapsed,
    open,
    onToggle,
    items
}: {
    title: string
    icon: React.ReactNode
    collapsed: boolean
    open: boolean
    onToggle: () => void
    items: { icon: React.ReactNode; label: string; href: string }[]
}) {
    return (
        <div className="text-sm">
            <div className="flex items-center justify-between cursor-pointer px-3 py-2 hover:bg-gray-800 rounded-md" onClick={onToggle}>
                <div className="flex items-center gap-3">
                    {icon}
                    {!collapsed && <span className="font-semibold text-[18px]">{title}</span>}
                </div>
                {!collapsed && (open ? <FiChevronUp /> : <FiChevronDown />)}
            </div>
            {open && !collapsed && (
                <div className="ml-7 mt-1 space-y-2">
                    {items.map(({ icon, label, href }, i) => (
                        <Link key={i} href={href} className=" text-[16px] flex items-center gap-2 hover:text-gray-300 transition">
                            {icon}
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
