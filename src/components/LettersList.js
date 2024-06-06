"use client";

import { useEffect, useState } from 'react';
import { fetchLetters } from '../firebase';

const LettersList = () => {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        fetchLetters((lettersData) => {
            setLetters(lettersData);
        });
    }, []);

    return (
        <div>
            {letters.map((letter, index) => (
                <div key={index} className="p-4 border-b border-gray-300 bg-white shadow-sm rounded mb-4">
                    <p className="text-gray-800">{letter.content}</p>
                    <small className="text-gray-600">
                        {new Date(letter.sendAt).toLocaleDateString()}
                    </small>
                </div>
            ))}
        </div>
    );
};

export default LettersList;