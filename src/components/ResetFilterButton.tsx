import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import AppState from "../redux/state/AppState";
import {resetPizzaTag} from "../redux/actions";

export default function ResetFilterButton( {name}:ResetFilterButtonProps ) {

    const isActiveButton = useSelector( (state: AppState) => !state.tags.some( e => e.isActive ) )
    const dispatch = useDispatch();

    const resetFilterButtonClasses = classNames( {
        "filter-button" : true,
        "btn": true,
        "btn__gray": true,
        "active": isActiveButton
    })

    return (
        <button onClick={ () => dispatch( resetPizzaTag() ) }
                className={resetFilterButtonClasses}>{name}</button>
    );
}

interface ResetFilterButtonProps {
    name: string;
}