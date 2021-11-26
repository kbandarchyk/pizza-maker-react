import Pizza from "../model/Pizza";

export default class AddPizzaToBasketActionPayload {

    private readonly _pizza: Pizza;

    constructor( pizza: Pizza ) {
        this._pizza = pizza;
    }

    get pizza(): Pizza {
        return this._pizza;
    }
}