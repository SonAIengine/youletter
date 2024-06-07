"use client";

import { useEffect, useState, useRef } from 'react';
import { fetchLetters } from '../firebase';


const LettersList = () => {
    const [letters, setLetters] = useState([]);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        fetchLetters((lettersData) => {
            setLetters(lettersData);
        });

        const handleScroll = () => {
            if (scrollContainerRef.current.scrollTop > 200) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        const scrollContainer = scrollContainerRef.current;
        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    };


return (
    <div className="md:max-h-[90vh] md:overflow-y-auto mobile-max-height scrollbar-hide p-4" ref={scrollContainerRef}>
        {letters.map((letter, index) => (
            <div key={index} className="p-4 border-b border-gray-300 bg-white shadow-sm rounded mb-4">
                    <p className="text-gray-800">{letter.content}</p>
                    <small className="text-gray-600">
                        {new Date(letter.sendAt).toLocaleDateString()}
                    </small>
                </div>
            ))}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-yellow-200 p-3 rounded-md shadow-lg text-yellow-700 border-2 border-yellow-900"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default LettersList;