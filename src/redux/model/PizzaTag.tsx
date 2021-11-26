export default class PizzaTag {

    private readonly _id: number;
    private readonly _name: string;
    private readonly _isActive: boolean;

    constructor( id: number,
                 name: string,
                 isActive: boolean ) {
        this._id = id;
        this._name = name;
        this._isActive = isActive;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    markAsActive(): PizzaTag {
        return new PizzaTag( this.id, this.name, true );
    }

    markAsInactive(): PizzaTag {
        return new PizzaTag( this.id, this.name, false );
    }

    static isFor( pizzaTagIdToCheck: number ) {
        return (e: PizzaTag) => e.id === pizzaTagIdToCheck;
    }

}