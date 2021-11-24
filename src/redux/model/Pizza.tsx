import PizzaSelectorType from "./PizzaSelectorType";
import {PizzaDoughType} from "./PizzaDoughType";
import {PizzaSizeType} from "./PizzaSizeType";

export default class Pizza {

    private readonly _id: number;
    private readonly _name: string;
    private readonly _availableDoughs: PizzaDoughType[];
    private readonly _availableSizes: PizzaSizeType[];
    private readonly _selectorTypes: PizzaSelectorType[];
    private readonly _currentSelectorType: PizzaSelectorType;
    private readonly _tags: string[];

    constructor( id: number,
                 name: string,
                 availableDoughs: PizzaDoughType[],
                 availableSizes: PizzaSizeType[],
                 selectorTypes: PizzaSelectorType[],
                 currentSelectorType: PizzaSelectorType,
                 tags: string[] ) {
        this._id = id;
        this._name = name;
        this._availableDoughs = availableDoughs;
        this._availableSizes = availableSizes;
        this._selectorTypes = selectorTypes;
        this._currentSelectorType = currentSelectorType;
        this._tags = tags;
    }

    selectDough( newDoughType: PizzaDoughType ): Pizza {

        if( !this.availableDoughs.some( e => e === newDoughType ) ) {
            console.log( `This pizza ${this} is not available with doughType: ${newDoughType}` );
            return this;
        }

        let newSelectorType = this.selectorTypes.find( PizzaSelectorType.isFor( newDoughType, this.currentSelectorType.size ) );

        if( newSelectorType === undefined ) {
            console.log( `Can not be found selectorType with dough: ${newDoughType} and size: ${this.currentSelectorType.size} in pizza: ${this}`);
            return this;
        }

        return new Pizza( this.id, this.name, this.availableDoughs, this.availableSizes,
                          this.selectorTypes, newSelectorType, this.tags );
    }

    static isFor( pizzaIdToCheck: number ) {
        return (e: Pizza) => e.id === pizzaIdToCheck;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get availableDoughs(): PizzaDoughType[] {
        return this._availableDoughs;
    }

    get availableSizes(): PizzaSizeType[] {
        return this._availableSizes;
    }

    get selectorTypes(): PizzaSelectorType[] {
        return this._selectorTypes;
    }

    get currentSelectorType(): PizzaSelectorType {
        return this._currentSelectorType;
    }

    get tags(): string[] {
        return this._tags;
    }

    toString() {
        return JSON.stringify( this );
    }
}