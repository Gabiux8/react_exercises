import skills from "../dev-data/skills.jsx";
import Skill from "./Skill.jsx";

function Skills() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill devskill={skill} key="555" />
      ))}
    </div>
  );
}
export default Skills;
