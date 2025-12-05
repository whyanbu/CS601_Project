import { useEffect, useState } from "react";
import { shuffle } from "../utils/shuffle";

const SequenceGame = () => {

    const [correctOrder, setCorrectOrder] = useState<string[]>([]);
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        const load = async () => {
            const res = await fetch(`${import.meta.env.BASE_URL}constructionOrder.json`);
            const data = await res.json();
            setCorrectOrder([...data]);
            setItems(shuffle<string>([...data]));
        };
        load();
    }, []);

    
    const [result, setResult] = useState<string | null>(null);
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    const onDragStart = (_e: React.DragEvent<HTMLDivElement>, index: number) => {
        setDragIndex(index);
    };
        
    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const onDrop = (_e: React.DragEvent<HTMLDivElement>, index: number) => {
        if (dragIndex === null) return;
        const newList = [...items];
        const moved = newList.splice(dragIndex, 1)[0];
        newList.splice(index, 0, moved);
        setItems(newList);
        setDragIndex(null);
    };

    const checkOrder = () => {
        const correct = JSON.stringify(items) === JSON.stringify(correctOrder);
        setResult(correct ? "Correct! You are an expert now!" : "Incorrect, try again.");
    };

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="mt-10 text-2xl font-bold mb-4 text-center">What is the correct project sequence?</h1>

            <div className="w-full max-w-xl space-y-2 mb-4">
                {items.map((item, index) => (
                    <div
                        key={item}
                        draggable
                        onDragStart={(e) => onDragStart(e, index)}
                        onDragOver={onDragOver}
                        onDrop={(e) => onDrop(e, index)}
                        className="p-3 bg-white rounded-xl shadow cursor-move text-center font-content select-none hover:bg-gray-50"
                    >
                        {item}
                    </div>
                ))}
            </div>


            <button onClick={checkOrder} className="px-6 py-2 bg-c4 text-white rounded-xl shadow hover:bg-c2">
                Check
            </button>

            {result && <p className="mt-4 text-lg font-semibold">{result}</p>}
        </div>
    );
};

export default SequenceGame;