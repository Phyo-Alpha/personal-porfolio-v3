import {
    SKILL_DATA,
} from "~/constants/skills";
import SkillIcon from "../sub/skill-icon";

export const Skills = () => {
    // Group skills into rows for the triangle layout
    const rows = [
        [SKILL_DATA[0], SKILL_DATA[1], SKILL_DATA[2], SKILL_DATA[3], SKILL_DATA[4]],
        [SKILL_DATA[5], SKILL_DATA[6], SKILL_DATA[7], SKILL_DATA[8]],
        [SKILL_DATA[9], SKILL_DATA[10], SKILL_DATA[11]],
        [SKILL_DATA[12], SKILL_DATA[13]],
        [SKILL_DATA[14]],
    ] as const;

    return (
        <section
            id="skills"
            style={{ transform: "scale(0.9)" }}
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
        >
            <div className="flex flex-col items-center gap-8 mt-4">
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex flex-row justify-center items-center gap-8 md:gap-12"
                    >
                        {row.map((skill, skillIndex) => (
                            skill && (
                                <SkillIcon
                                    key={skill.skill_name}
                                    src={skill.image}
                                    name={skill.skill_name}
                                    width={skill.width}
                                    height={skill.height}
                                    index={rowIndex * 5 + skillIndex}
                                />
                            )
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};