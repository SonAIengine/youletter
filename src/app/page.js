import LettersList from '../components/LettersList';

export default function Home() {
    return (
        <div className="md:h-screen flex flex-col">
            <h1 className="text-2xl font-bold md:m-4 text-white p-4 md:p-0">예약 편지 리스트</h1>
            <div className="flex-grow overflow-y-auto scrollbar-hide">
                <LettersList />
            </div>
        </div>
    );
}
