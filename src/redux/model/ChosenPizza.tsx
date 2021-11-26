import PizzaSelectorType from "./PizzaSelectorType";
import Pizza from "./Pizza";

export default class ChosenPizza {

    private readonly _id: number;
    private readonly _name: string;
    private readonly _currentSelectorType: PizzaSelectorType;
    private readonly _count: number;

    constructor( id: number,
                 name: string,
                 currentSelectorType: PizzaSelectorType,
                 count: number ) {
        this._id = id;
        this._name = name;
        this._currentSelectorType = currentSelectorType;
        this._count = count;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get currentSelectorType(): PizzaSelectorType {
        return this._currentSelectorType;
    }

    get count(): number {
        return this._count;
    }

    increaseNumber():ChosenPizza {
        return new ChosenPizza( this.id, this.name, this.currentSelectorType, this.count + 1 );
    }

    static isFor( pizza: Pizza ) {
        return (e: ChosenPizza) => e.id === pizza.id
                                && e.currentSelectorType.isEqual( pizza.currentSelectorType );
    }
}