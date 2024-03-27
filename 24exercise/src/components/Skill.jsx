import PropTypes from "prop-types";

function Skill({ devskill }) {
  console.log(devskill);
  const { skill, level, color } = devskill;

  console.log(skill);
  console.log(level);
  // console.log(color);
  // const { skill, level, color } = devSkill;

  return (
    <div className="skill">
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
      </span>
    </div>
  );
}
Skill.propTypes = {
  devskill: PropTypes.shape({
    skill: PropTypes.string.isRequired,
    level: PropTypes.oneOf(["beginner", "intermediate", "advanced"]).isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Skill;
