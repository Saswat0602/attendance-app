import Header from '@/components/common/Header';
import Sidebar from '@/components/common/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">
                <Header headername="Dashboard" />
                <main className="flex-1 bg-gray-100 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
