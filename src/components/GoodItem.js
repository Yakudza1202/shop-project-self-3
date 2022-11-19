import { useContext } from "react";
import { ShopContext } from "../context";

export default function GoodItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets,
    price
  } = props;

  const {addToBasket} = useContext(ShopContext)

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img
          src={displayAssets.map((item) => item.full_background)}
          alt={displayName}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn" 
          onClick={() => addToBasket({ mainId, displayName, price })}
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.finalPrice}$
        </span>
      </div>
    </div>
  );
}
