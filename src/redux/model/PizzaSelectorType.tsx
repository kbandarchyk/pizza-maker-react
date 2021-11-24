import {PizzaDoughType} from "./PizzaDoughType";
import {PizzaSizeType} from "./PizzaSizeType";

export default class PizzaSelectorType {

    private readonly _dough: PizzaDoughType;
    private readonly _size: PizzaSizeType;
    private readonly _cost: number;

    constructor( dough: PizzaDoughType,
                 size: PizzaSizeType,
                 cost: number ) {
        this._dough = dough;
        this._size = size;
        this._cost = cost;
    }

    get dough(): PizzaDoughType {
        return this._dough;
    }

    get size(): PizzaSizeType {
        return this._size;
    }

    get cost(): number {
        return this._cost;
    }

    static isFor( doughToCheck: PizzaDoughType, sizeToCheck: PizzaSizeType ) {
        return (e: PizzaSelectorType) => e.dough === doughToCheck && e.size === sizeToCheck;
    }
}