import { useState } from "react";
import InputForm from "./components/InputForm";
import FruitsList from "./components/FruitsList";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);

  const addFruitToList = (enteredFruitTitle) => {
    setFruits((fruits) => [...fruits, enteredFruitTitle]);
  };
  const deleteFruits = (fruitTitle) => {
    let confirmation = window.confirm(
      `Are you sure? You will delete ${fruitTitle}`
    );
    if (!confirmation) return;
    setFruits(fruits.filter((fruit) => fruit !== fruitTitle));
  };
  const editFruit = (fruitTitle, text) => {
    setFruits(
      fruits.map((fruit) => {
        if (fruit === fruitTitle) {
          return `${text}${fruit}${text}`;
        } else {
          return fruit;
        }
      })
    );
  };
  return (
    <>
      <InputForm addFruit={addFruitToList} />
      <FruitsList
        fruitsList={fruits}
        deleteFromList={deleteFruits}
        editFruit={editFruit}
      />
    </>
  );
}

export default App;
