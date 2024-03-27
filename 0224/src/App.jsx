import avatar from "./assets/images/women.jpg";
import "./index.css";

function App() {
  let enable = true;

  return (
    <>
      <div className={`content ${enable ? "active" : ""}`}>
        Labas!{enable && "Sveiki"}
      </div>
      <p>
        Lorem ipsum dolor {4 + 9}sit amet consectetur adipisicing elit. Nostrum
        iste deleniti magnam fugit libero perferendis sint laboriosam.
        Laboriosam suscipit, quisquam consequuntur architecto maiores iure
        dolorem necessitatibus, consequatur nisi aliquid itaque.
      </p>
      <img src={avatar} alt="Avatar" />
    </>
  );
}

export default App;
