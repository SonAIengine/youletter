import LettersList from '../components/LettersList';

export default function Home() {
  return (
      <div>
        <h1 className="text-2xl font-bold mb-4 text-white">예약 편지 리스트</h1>
        <LettersList />
      </div>
  );
}