"use client";

import { useRouter } from 'next/navigation';

export default function Sidebar() {
    const router = useRouter();
    const handleWriteClick = () => {
        router.push('/writer');
    }

    const descriptionTop = `1년 뒤 나에게 보내는 메시지입니다...
    
미래에 나에게 해주고 싶은 말이나..

당부, 목표, 잔소리 등등 남겨보세요..

1년 뒤 내가.. 후회하지 않도록..`;

    const descriptionBottom = `이 사이트는 여러분이 자신의 미래를 계획하고,
    
목표를 달성하기 위해 도움을 주기 위해 만들어졌습니다.

편지를 작성하고 1년 뒤에 자신에게 보내는 메시지를 통해,

스스로에게 동기부여를 하고 현재의 결정을 되돌아볼 수 있습니다.

지금 바로 편지를 작성해보세요.`;

    return (
        <aside className="w-full lg:w-1/3 p-6 bg-gradient-to-r from-yellow-700 to-yellow-900 text-white h-auto lg:h-screen flex flex-col justify-between relative">
            <div className="mb-8">
                <button
                    className="bg-yellow-700 text-white hover:bg-yellow-700 p-2 rounded shadow-md w-full mb-4 transition duration-300 font-bold"
                    onClick={handleWriteClick}>
                    작성하기
                </button>
                <p className="text-lg font-semibold">1년 뒤 나에게 보내는 편지</p>
                <hr/>
                <p className="mt-2 text-sm whitespace-pre-line">
                    {descriptionTop}
                </p>
            </div>
            <div className="hidden lg:block absolute bottom-6 left-6 right-6">
                <p className="text-sm whitespace-pre-line">
                    {descriptionBottom}
                </p>
            </div>
        </aside>
    );
}