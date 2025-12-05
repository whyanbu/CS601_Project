import type { Skill } from "../types";

interface Props {
    skill: Skill
}

const SkillCard: React.FC<Props> = (props: Props) => {
    return (
        <div className="max-w-3xl mx-auto my-10 py-5 px-10 bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.25)] font-content">
            <div className="text-c4 text-2xl mt-3">{props.skill.skill}</div>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 my-5">
                {props.skill.items.map((item: string, idx: number) => <div key={idx} className="before:content-['--']">{item}</div>)}
            </div>
        </div>
    );
};

export default SkillCard;