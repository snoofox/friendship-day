"use client";
import { useState } from "react";

export default function Page() {
    const [count, setCount] = useState(0);
    const yesButtonSize = count * 20 + 16;

    const handleNoClick = () => {
        setCount(count + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "Are you sure?",
            "What if I asked really nicely?",
            "You're the best, right?",
            "Just a little treat?",
            "A small token of our friendship?",
            "You know you want to!",
            "For the memories?",
            "How about a hug in return?",
            "Think of the good times!",
            "It's Friendship Day!",
            "A little kindness?",
            "For the laughs we've shared!",
            "Your favorite buddy needs you!",
            "You complete me!",
            ":(((",
        ];

        return phrases[Math.min(count, phrases.length - 1)];
    };

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-pink-100">
            <img
                className="h-[200px]"
                src="https://media1.tenor.com/m/0l_6FPwOqIcAAAAC/happy-friendship-day-love-together.gif"
            />
            <h1 className="my-4 text-3xl text-center">Do you want to make me happy? 💖</h1>
            <div className="flex items-center">
                <a
                    className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                    style={{ fontSize: yesButtonSize }}
                    href="upi://pay?pa=ashwinsingh450@okicici&cu=INR&am=101"
                >
                    Yes
                </a>
                <button
                    onClick={handleNoClick}
                    className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                >
                    {count === 0 ? "No" : getNoButtonText()}
                </button>
            </div>
        </div>
    );
}
