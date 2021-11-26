export default class SelectPizzaTagActionPayload {

    private readonly _pizzaTagId: number;

    constructor( pizzaTagId: number ) {
        this._pizzaTagId = pizzaTagId;
    }

    get pizzaTagId(): number {
        return this._pizzaTagId;
    }
}