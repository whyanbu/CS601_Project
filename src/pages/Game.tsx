import SequenceGame from "../components/SequenceGame";

const Game = () => {
    return (
        <div className="bg-c6 py-15">
            <div className="flex flex-row justify-between max-w-105 my-0 mx-auto items-center">
                <span className="w-6 h-6 rounded-full bg-c4 flex items-center justify-center text-2xl font-bold"></span>
                <span className="font-bold text-5xl">Let's play a game!</span>
            </div>
            <SequenceGame />
        </div>
    );
};

export default Game;