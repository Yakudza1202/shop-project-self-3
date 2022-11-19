import { useContext } from "react";
import { ShopContext } from "../context";

export default function BasketItem(props) {
  const { mainId, displayName, price, quantity } = props;

  const { removeFromBasket, incrementQuantity, decrementQuantity } =
    useContext(ShopContext);

  return (
    <li className="collection-item">
      {displayName} x{quantity} = {price.finalPrice * quantity}
      <b>$</b>
      <span className="secondary-content">
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => incrementQuantity(mainId)}
        >
          <i className="material-icons left">exposure_plus_1</i>add
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => decrementQuantity(mainId)}
          style={{ margin: "0px 10px" }}
        >
          <i className="material-icons left">exposure_minus_1</i>remove
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => removeFromBasket(mainId)}
        >
          <i className="material-icons basket-delete">delete_forever</i> delete
        </a>
      </span>
    </li>
  );
}
