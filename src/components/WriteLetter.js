"use client";

import { useState } from 'react';
import { saveLetter } from '../firebase';
import { useRouter } from 'next/navigation';

const WriteLetter = () => {
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleRouteMain = () => {
        router.push('/');
    }

    const handleSaveLetter = async () => {
        const sendAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // 1년 후
        await saveLetter(content, sendAt.toISOString());
        handleRouteMain();
    };

    return (
        <div className="flex flex-col justify-start lg:justify-center lg:items-center min-h-screen p-4 lg:h-screen">
            <div className="p-6 w-full max-w-4xl bg-gradient-to-r from-yellow-900 to-yellow-800 text-white rounded-lg shadow-lg mt-4 lg:mt-0 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-4">편지 작성하기</h1>
                <textarea
                    className="w-full h-64 p-3 border rounded bg-yellow-700 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 overflow-y-auto"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="1년 뒤의 나에게 편지를 작성하세요..."
                    style={{ maxHeight: '400px' }}
                />
                <div className="flex justify-end mt-4 space-x-4">
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                        onClick={handleRouteMain}
                    >
                        홈으로
                    </button>
                    <button
                        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                        onClick={handleSaveLetter}
                    >
                        편지 저장
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WriteLetter;
