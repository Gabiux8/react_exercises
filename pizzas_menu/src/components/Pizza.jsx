/* eslint-disable react/prop-types */
function Pizza({ onePizza }) {
  const { name, ingredients, photoName, price, soldOut } = onePizza;
  console.log(onePizza);
  return (
    <div className={`pizzaContainer ${soldOut && "soldOut"}`}>
      <>
        <img src={`src/assets/images/${photoName}`} alt="pizza photo" />
      </>

      <div>
        <div className="pizzaName">{name}</div>
        <div className="ingredients">{ingredients}</div>
        {soldOut ? <div>SOLD OUT</div> : <div>{price} Eur</div>}
      </div>
    </div>
  );
}

export default Pizza;
