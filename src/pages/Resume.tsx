import { useEffect, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";
import type { Experience, Education, Skill } from "../types";
import EducationCard from "../components/EducationCard";
import SkillCard from "../components/SkillCard";

const Resume = () => {

    const [experience, setExperience] = useState<Experience[]>([]);
    const [education, setEducation] = useState<Education[]>([]);
    const [skill, setSkill] = useState<Skill[]>([]);

    useEffect(() => {
        const fetchExperience = async () => {
            const response = await fetch(`${import.meta.env.BASE_URL}experience.json`);
            console.log("response: ", response);
            const data: Experience[] = await response.json();
            setExperience(data);
        };
        const fetchEducation = async () => {
            const response = await fetch(`${import.meta.env.BASE_URL}education.json`);
            const data: Education[] = await response.json();
            setEducation(data);
        };
        const fetchSkill = async () => {
            const response = await fetch(`${import.meta.env.BASE_URL}skill.json`);
            const data: Skill[] = await response.json();
            setSkill(data);
        };
        fetchExperience();
        fetchEducation();
        fetchSkill();
    }, []);

    return (
        <div className="bg-c1 py-15">
            <div className="flex flex-row justify-between max-w-55 my-0 mx-auto items-center">
                <span className="w-6 h-6 rounded-full bg-c4 flex items-center justify-center text-2xl font-bold"></span>
                <span className="font-bold text-5xl">Resume</span>
            </div>
            <div>
                {experience.length === 0 ? "" : <div className="max-w-3xl text-center md:text-left mx-auto mt-10 text-3xl text-c4 font-bold">Experience</div>}
                {experience.map((exp: Experience, idx: number) => <ExperienceCard key={idx} exp={exp}/>)}
            </div>
            <div>
                {education.length === 0 ? "" : <div className="max-w-3xl text-center md:text-left mx-auto mt-10 text-3xl text-c4 font-bold">Education</div>}
                {education.map((edu: Education, idx: number) => <EducationCard key={idx} edu={edu}/>)}
            </div>
            <div>
                {skill.map((s: Skill, idx: number) => <SkillCard key={idx} skill={s}/>)}
            </div>
        </div>
    );
};

export default Resume;