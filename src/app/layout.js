import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex flex-col lg:flex-row min-h-screen">
            <Sidebar />
            <main className="bg-gradient-to-r from-yellow-800 to-yellow-900 text-gray-900 flex-grow">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
