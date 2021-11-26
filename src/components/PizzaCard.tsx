import pizza from "../assets/img/content/pizza.png";
import PizzaCardDoughSelector from "./PizzaCardDoughSelector";
import PizzaCardSizeSelector from "./PizzaCardSizeSelector";
import PizzaCardFooter from "./PizzaCardFooter";
import {useSelector} from "react-redux";
import AppState from "../redux/state/AppState";

export default function PizzaCard( {pizzaId}: PizzaCardProps) {

    const currentPizza = useSelector( (state: AppState) => state.findPizzaById( pizzaId ) );

    return (
        <div className="pizza-card">
            <img className="pizza-card__logo" src={pizza} alt="pizza"/>
            <h2 className="pizza-card__title">{currentPizza.name}</h2>
            <div className="pizza-card__selector">
                <PizzaCardDoughSelector pizzaId={currentPizza.id}/>
                <PizzaCardSizeSelector pizzaId={currentPizza.id}/>
            </div>
            <PizzaCardFooter pizzaId={currentPizza.id}/>
        </div>
    );
}

interface PizzaCardProps {
    pizzaId: number
}