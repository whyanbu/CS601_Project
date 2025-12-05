import type { Experience } from "../types";

interface Props {
    exp: Experience
}

const ExperienceCard: React.FC<Props> = (props: Props) => {
    return (
        <div className="max-w-3xl mx-auto my-10 py-5 px-10 bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.25)] font-content">
            <div className="text-c4 text-2xl mt-3">{props.exp.period}</div>
            <div className="flex flex-col md:flex-row">
                <div className="flex-2">
                    <div className="pt-6 font-semibold">
                        {props.exp.position}
                    </div>
                    <div className="pt-5">
                        {props.exp.companyName}
                    </div>
                    <div className="pt-1">
                        {props.exp.location}
                    </div>
                </div>
                <div className="flex-3 pt-6">
                    {props.exp.description}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;