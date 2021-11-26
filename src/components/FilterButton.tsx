import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import AppState from "../redux/state/AppState";
import {selectPizzaTag} from "../redux/actions";

export default function FilterButton( {tagId}:FilterButtonProps ) {

    const currentPizzaTag = useSelector( ( state: AppState) => state.findPizzaTagById( tagId ) );
    const dispatch = useDispatch();

    const filterButtonClasses = classNames( {
        "filter-button" : true,
        "btn": true,
        "btn__gray": true,
        "active": currentPizzaTag.isActive
    })

    return (
        <button onClick={ () => dispatch( selectPizzaTag( currentPizzaTag.id ) ) }
                className={filterButtonClasses}>{currentPizzaTag.name}</button>
    );
}

interface FilterButtonProps {
    tagId: number;
}