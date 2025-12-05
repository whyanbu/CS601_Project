import PageTitle from "../components/PageTitle";
import SequenceGame from "../components/SequenceGame";

const Game = () => {
    return (
        <div className="bg-c6 py-15">
            <PageTitle text="Game" color={"c4"}/>
            <SequenceGame />
        </div>
    );
};

export default Game;