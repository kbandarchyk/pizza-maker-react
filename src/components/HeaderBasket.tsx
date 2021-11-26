import {useSelector} from "react-redux";
import AppState from "../redux/state/AppState";

export default function HeaderBasket() {

    const clientBucketCost = useSelector( (state: AppState) => state.clientBasket.cost );

    return (
        <div className="header__basket">
            <button className="btn btn__red">${clientBucketCost}</button>
        </div>
    );
}