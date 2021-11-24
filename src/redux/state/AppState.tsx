import Pizza from "../model/Pizza";

export default class AppState {

    private readonly _pizzas: Pizza[];

    constructor( pizzas: Pizza[] ) {
        this._pizzas = pizzas;
    }

    get pizzas(): Pizza[] {
        return this._pizzas;
    }

}