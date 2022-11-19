import { useContext } from "react";
import { ShopContext } from "../context";
import GoodItem from "./GoodItem";

export default function GoodList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return (
      <div>
        <div class="content">
          <h2 class="header" data-text="404">
            404
          </h2>
          <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
          <p>Sorry, the page you're looking for doesn't exist. </p>
        </div>
      </div>
    );
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}
