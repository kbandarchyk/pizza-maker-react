import {PizzaDoughType} from "../model/PizzaDoughType";

export default class SelectPizzaDoughActionPayload {

    private readonly _pizzaId: number;
    private readonly _selectedDough: PizzaDoughType;

    constructor( pizzaId: number,
                 selectedDough: PizzaDoughType) {
        this._pizzaId = pizzaId;
        this._selectedDough = selectedDough;
    }


    get pizzaId(): number {
        return this._pizzaId;
    }

    get selectedDough(): PizzaDoughType {
        return this._selectedDough;
    }
}