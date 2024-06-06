import LettersList from '../components/LettersList';

export default function Home() {
    return (
        <div className="h-screen flex flex-col p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">예약 편지 리스트</h1>
            <div className="flex-grow overflow-y-auto scrollbar-hide">
                <LettersList/>
            </div>
        </div>
    );
}
