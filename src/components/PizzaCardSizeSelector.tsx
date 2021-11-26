import {useDispatch, useSelector} from "react-redux";
import AppState from "../redux/state/AppState";
import classNames from "classnames";
import {PizzaSizeType} from "../redux/model/PizzaSizeType";
import {selectPizzaSize} from "../redux/actions";

export default function PizzaCardSizeSelector( {pizzaId}: PizzaCardSizeSelectorProps ) {

    const currentPizza = useSelector( (state:AppState) => state.findPizzaById( pizzaId ) );
    const dispatch = useDispatch();

    const smallSizeClasses = classNames( {
        "selector__button": true,
        "selector_button_third_part": true,
        "small-size": true,
        "active": currentPizza.currentSelectorType.size === PizzaSizeType.SMALL,
        "disabled": !currentPizza.availableSizes.some( e => e === PizzaSizeType.SMALL )
    });

    const mediumSizeClasses = classNames( {
        "selector__button": true,
        "selector_button_third_part": true,
        "medium-size-size": true,
        "active": currentPizza.currentSelectorType.size === PizzaSizeType.MEDIUM,
        "disabled": !currentPizza.availableSizes.some( e => e === PizzaSizeType.MEDIUM )
    });

    const largeSizeClasses = classNames( {
        "selector__button": true,
        "selector_button_third_part": true,
        "large-size-size": true,
        "active": currentPizza.currentSelectorType.size === PizzaSizeType.LARGE,
        "disabled": !currentPizza.availableSizes.some( e => e === PizzaSizeType.LARGE )
    });

    return (
        <div className="selector__size">
            <button onClick={ () => dispatch( selectPizzaSize( currentPizza.id, PizzaSizeType.SMALL ) ) }
                    className={smallSizeClasses}>26 cm</button>
            <button onClick={ () => dispatch( selectPizzaSize( currentPizza.id, PizzaSizeType.MEDIUM ) ) }
                    className={mediumSizeClasses}>30 cm</button>
            <button onClick={ () => dispatch( selectPizzaSize( currentPizza.id, PizzaSizeType.LARGE ) ) }
                    className={largeSizeClasses}>40 cm</button>
        </div>
    );
}

interface PizzaCardSizeSelectorProps {
    pizzaId: number
}