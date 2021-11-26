import {useDispatch, useSelector} from "react-redux";
import AppState from "../redux/state/AppState";
import {addPizzaToBasket} from "../redux/actions";

export default function PizzaCardFooter( {pizzaId}: PizzaCardFooterProps ) {

    const currentPizza = useSelector( (state: AppState) => state.findPizzaById( pizzaId ) )
    const dispatch = useDispatch();

    return (
        <div className="pizza-card__footer">
            <h2>${currentPizza.currentSelectorType.cost}</h2>
            <button onClick={() => dispatch( addPizzaToBasket( currentPizza ) ) }
                    className="btn btn__white">+ Добавить</button>
        </div>
    );
}

interface PizzaCardFooterProps {
    pizzaId: number;
}