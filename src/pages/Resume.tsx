import { useEffect, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";
import type { Experience, Education, Skill } from "../types";
import EducationCard from "../components/EducationCard";
import SkillCard from "../components/SkillCard";
import PageTitle from "../components/PageTitle";

const Resume = () => {

    const [experience, setExperience] = useState<Experience[]>([]);
    const [education, setEducation] = useState<Education[]>([]);
    const [skill, setSkill] = useState<Skill[]>([]);

    useEffect(() => {
        const fetchExperience = async () => {
            const response = await fetch("https://cs601projectapi.vercel.app/experience");
            const data: Experience[] = await response.json();
            setExperience(data.sort((a, b) => b.displayOrder - a.displayOrder));
        };
        const fetchEducation = async () => {
            const response = await fetch("https://cs601projectapi.vercel.app/education");
            const data: Education[] = await response.json();
            setEducation(data.sort((a, b) => b.displayOrder - a.displayOrder));
        };
        const fetchSkill = async () => {
            const response = await fetch("https://cs601projectapi.vercel.app/skill");
            const data: Skill[] = await response.json();
            setSkill(data.sort((a, b) => b.displayOrder - a.displayOrder));
        };
        fetchExperience();
        fetchEducation();
        fetchSkill();
    }, []);

    return (
        <div className="bg-c1 py-15">
            <PageTitle text="Résumé" className="before:text-c4"/>
            <div>
                {experience.length === 0 ? "" : <div className="w-9/10 max-w-3xl text-center md:text-left mx-auto mt-10 text-3xl text-c4 font-bold">Experience</div>}
                {experience.map((exp: Experience, idx: number) => <ExperienceCard key={idx} exp={exp}/>)}
            </div>
            <div>
                {education.length === 0 ? "" : <div className="w-9/10 max-w-3xl text-center md:text-left mx-auto mt-10 text-3xl text-c4 font-bold">Education</div>}
                {education.map((edu: Education, idx: number) => <EducationCard key={idx} edu={edu}/>)}
            </div>
            <div>
                {skill.map((s: Skill, idx: number) => <SkillCard key={idx} skill={s}/>)}
            </div>
        </div>
    );
};

export default Resume;