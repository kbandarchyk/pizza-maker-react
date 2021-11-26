import FilterButton from "./FilterButton";
import {useSelector} from "react-redux";
import AppState from "../redux/state/AppState";
import ResetFilterButton from "./ResetFilterButton";

export default function FilterButtons() {

    const pizzaTags = useSelector( (state: AppState) => state.tags );

    return (
        <div className="filter-buttons">
            <ResetFilterButton name='все'/>
            { pizzaTags.map( e => <FilterButton key={e.id} tagId = {e.id }/> ) }
        </div>
    );
}