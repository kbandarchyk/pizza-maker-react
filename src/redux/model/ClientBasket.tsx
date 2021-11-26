import ChosenPizza from "./ChosenPizza";
import Pizza from "./Pizza";
import {addNewElement, replaceArrayElement} from "../../utils/immutable-collection-utils";

export default class ClientBasket {

    private readonly _chosenPizzas: ChosenPizza[];
    private readonly _cost: number;

    constructor( chosenPizzas: ChosenPizza[],
                 cost: number) {
        this._chosenPizzas = chosenPizzas;
        this._cost = cost;
    }

    get chosenPizzas(): ChosenPizza[] {
        return this._chosenPizzas;
    }

    get cost(): number {
        return this._cost;
    }

    addPizzaToBasket( pizza:Pizza ):ClientBasket {

        let currentChosenPizza = this.chosenPizzas.find( ChosenPizza.isFor( pizza ) );

        if( currentChosenPizza === undefined ) {
            return new ClientBasket( addNewElement( this.chosenPizzas,
                                                    new ChosenPizza( pizza.id, pizza.name, pizza.currentSelectorType, 1 ) ),
                                     this.cost + pizza.currentSelectorType.cost );

        } else {
            return new ClientBasket( replaceArrayElement( this.chosenPizzas,
                                                          this.chosenPizzas.findIndex( ChosenPizza.isFor( pizza ) ),
                                                          currentChosenPizza.increaseNumber() ),
                                     this.cost + pizza.currentSelectorType.cost );
        }

    }
}