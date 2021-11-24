import pizza from "../assets/img/content/pizza.png";
import PizzaCardDoughSelector from "./PizzaCardDoughSelector";
import PizzaCardSizeSelector from "./PizzaCardSizeSelector";
import PizzaCardFooter from "./PizzaCardFooter";

export default function PizzaCard() {
    return (
        <div className="pizza-card">
            <img className="pizza-card__logo" src={pizza} alt="pizza"/>
            <h2 className="pizza-card__title">Сырный цыпленок</h2>
            <div className="pizza-card__selector">
                <PizzaCardDoughSelector/>
                <PizzaCardSizeSelector/>
            </div>
            <PizzaCardFooter/>
        </div>
    );
}