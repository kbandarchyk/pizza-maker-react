import {useDispatch, useSelector} from "react-redux";
import AppState from "../redux/state/AppState";
import classNames from "classnames";
import {PizzaDoughType} from "../redux/model/PizzaDoughType";
import {selectPizzaDough} from "../redux/actions";

export default function PizzaCardDoughSelector( {pizzaId}: PizzaCardDoughSelectorProps ) {

    const dispatch = useDispatch();
    const currentPizza = useSelector( (state: AppState) => state.findPizzaById( pizzaId ) );

    const thinDoughClasses = classNames( {
        "thin-dough" : true,
        "selector__button" : true,
        "selector_button_half_part": true,
        "disabled": !currentPizza.availableDoughs.some( e => e === PizzaDoughType.THIN ),
        "active": currentPizza.currentSelectorType.dough === PizzaDoughType.THIN
    })

    const traditionalDoughClasses = classNames( {
        "traditional-dough" : true,
        "selector__button" : true,
        "selector_button_half_part": true,
        "disabled": !currentPizza.availableDoughs.some( e => e === PizzaDoughType.TRADITIONAL ),
        "active": currentPizza.currentSelectorType.dough === PizzaDoughType.TRADITIONAL
    })

    return (
        <div className="selector__dough">
            <button onClick={ () => dispatch( selectPizzaDough( currentPizza.id, PizzaDoughType.THIN ) )}
                    className={thinDoughClasses}>тонкое</button>
            <button onClick={ () => dispatch( selectPizzaDough( currentPizza.id, PizzaDoughType.TRADITIONAL ) )}
                    className={traditionalDoughClasses}>традиционное</button>
        </div>
    );
}


interface PizzaCardDoughSelectorProps {
    pizzaId: number;
}