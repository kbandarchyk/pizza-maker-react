import PizzaCard from "./PizzaCard";
import {useSelector} from "react-redux";
import Pizza from "../redux/model/Pizza";
import AppState from "../redux/state/AppState";

export default function PizzaCards() {

    const pizzas: Pizza[] = useSelector( (state:AppState ) => state.pizzas );

    return (
        <div className="pizza-cards">
            { pizzas?.map( e => <PizzaCard key={e.id} pizzaId={e.id}/>) }
        </div>
    );
}