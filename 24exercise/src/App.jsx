import "./index.css";
import avatarImage from "./assets/images/face.jpg";
import skills from "./dev-data/skills.jsx";
import Skill from "./components/Skill.jsx";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <div>Intro goes here</div>
        <Skills />
      </div>
    </div>
  );
}

//avatar component
function Avatar() {
  return <img src={avatarImage} alt="Avatar" className="avatar" />;
}

function Skills() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill devskill={skill} key="555" />
      ))}
    </div>
  );
}

export default App;
