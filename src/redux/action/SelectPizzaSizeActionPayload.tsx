import {PizzaSizeType} from "../model/PizzaSizeType";

export default class SelectPizzaSizeActionPayload {

    private readonly _pizzaId: number;
    private readonly _selectedSize: PizzaSizeType;

    constructor( pizzaId: number,
                 selectedSize: PizzaSizeType) {
        this._pizzaId = pizzaId;
        this._selectedSize = selectedSize;
    }


    get pizzaId(): number {
        return this._pizzaId;
    }

    get selectedSize(): PizzaSizeType {
        return this._selectedSize;
    }
}